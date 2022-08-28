# askseaman.com

Questions &amp; answers platform for Seamans, built with GraphQL, Apollo, React, Neo4j and Typescript

To start working with this Q&A platform you need to have docker & docker-compose installed on your machine.

Clone project to your machine:
```sh
git clone https://github.com/erik7z/askseaman.com.git
```

## Deployment

### Deploying with docker-compose

```shell
# login to docker hub
docker login -u zzzloy777

# run build scripts in each directory to create latest images and push them to docker-hub:
cd ./api && npm run docker:build # or npm run docker:build:local
cd ./client && npm run docker:build # or npm run docker:build:local

# copy envs from .env-local.example or .env-server.example to .env according to your environment:
cp ./.env-local.example .env

# uncomment appropriate line in docker-compose.yml for client image (local or production)

# wind up the project:
docker-compose up --force-recreate 
```

After all files succesfully generated and client build completed, project will be available your localhost.


### Deploying with kubernetes

- Set up gcloud cluster:
```shell
# login to gcloud
gcloud auth login // login to gcloud (nguita.erik@gmail.com)

# set current project
gcloud config set project seacontact

# set default zone
gcloud config set compute/zone europe-west4-a

# created cluster ez with a minimum nodes and in cheap zone:  (if choose --region instead --zone, then 3 nodes will be created, one for each zone in region)
gcloud container clusters create ez --zone europe-west4-a --num-nodes 1

# getting kubernetes credentials:
gcloud container clusters get-credentials ez --zone europe-west4-a 

# listing and setting contexts:
kubectl config get-contexts
kubectl config use-context {context-name}

# list cluster nodes (instances)
kubectl get nodes 
```

- Set up and prepare storage disk: (only formatted disks can be used in instance PVC)
```shell
# enable PD addon and create unformatted disk:
gcloud container clusters update ez --update-addons=GcePersistentDiskCsiDriver=ENABLED --zone=europe-west4-a
gcloud compute disks create ez-disk --size 32 --type pd-ssd --zone=europe-west4-a
gcloud compute disks list

# create utility instance:
gcloud compute instances create sc-util --image-family=ubuntu-2204-lts --image-project=ubuntu-os-cloud --machine-type=e2-micro --zone=europe-west4-a

# attach created disk to utility instance 
gcloud compute instances attach-disk sc-util --disk ez-disk

# see that disk is attached:
gcloud compute disks describe sc-util

# format and mount disk
gcloud compute ssh sc-util

# use the lsblk command to list the disks that are attached to your instance
sudo lsblk

# formatting entire disk to ext4 with no partition table:
sudo mkfs.ext4 -m 0 -E lazy_itable_init=0,lazy_journal_init=0,discard /dev/sdb

# Mounting the disk
# 1. Create a directory that serves as the mount point for the new disk on the VM. You can use any directory.
sudo mkdir -p /mnt/disks/ez_disk

# 2. Use the [mount tool](http://manpages.ubuntu.com/manpages/xenial/man8/mount.8.html) to mount the disk to the instance, and enable the discard option:
sudo mount -o discard,defaults /dev/sdb /mnt/disks/ez_disk

# 3. Configure read and write permissions on the disk. For this example, grant write access to the disk for all users.
sudo chmod a+w /mnt/disks/ez_disk

# Unmounting disk
lsblk
# unmount using directory
sudo umount /mnt/disks/ez_disk

# or unmount using drive
sudo umount /dev/sdb

# detaching disk:
gcloud compute instances detach-disk sc-util --disk ez-disk

# stop & delete instance
gcloud compute instances stop sc-util
gcloud compute instances delete sc-util

# get disk link:
gcloud compute disks describe ez-disk | grep selfLink #use part starting from 'project' in PV config
```

- prepare storages and transfer static files:
```shell
# create storage class
kubectl apply -f ./deployment/storage.yaml

# create volume+volume claim
kubectl apply -f ./deployment/zonal/volume+claim.yaml

# run up utility pod if needed: (transfer files/manage storage)
kubectl apply -f ./deployment/zonal/util.yaml

# ssh to utility pod and transfer files:
kubectl exec -ti ez-util -- /bin/bash

# copy neo4j db data into root@ez-util:/transfer/askseaman.com/neo4j
# get local directory size:
du -sh ./neo4j

# install pv on your machine (to see transfer progress)
apt install pv
# copy files to root directory
tar cf - ./neo4j | pv -s 219M | kubectl exec -i ez-util -- tar xf -

# move transfered folder
root@ez-util:/# mv ./neo4j ./transfer/askseaman.com/

# install curl and fetch neo4j apoc plugin in pod 
root@ez-util:/# apt update && apt install curl
root@ez-util:/# curl -L -o /transfer/askseaman.com/neo4j/plugins/apoc-4.2.0.5-all.jar https://github.com/neo4j-contrib/neo4j-apoc-procedures/releases/download/4.2.0.5/apoc-4.2.0.5-all.jar

# change access rights:
#chmod -R 777 ./transfer/askseaman.com/neo4j/

# disconnect and delete utility pod
kubectl delete -f ./deployment/zonal/util.yaml
```

- run up deployments
```shell
# run neo4j db deployment
kubectl apply -f ./deployment/zonal/neo4j-deployment.yaml

# deploy api & client
kubectl apply -f ./deployment/api-deployment.yaml
kubectl apply -f ./deployment/client-deployment.yaml
```


Setup static ip, ingress, dns
```shell
# add ingress controller to cluster
kubectl apply -f https://projectcontour.io/quickstart/contour.yaml

# get list of static addresses
gcloud compute addresses list 

# create new static ip if needed
#gcloud compute addresses create askseaman-ip --global

# add static ip as annotation to ingress rules (kubernetes.io/ingress.global-static-ip-name: "askseaman-ip")
# apply ingress rules to cluster
kubectl apply -f ./deployment/ingress.yaml

# check forwarding rules 
gcloud compute forwarding-rules list --format \
  "table[box](name,region,IPAddress,target.segment(-2):label=TARGET_TYPE)"

# take ip address for created ingress and update A record type in dns rules
gcloud dns --project=seacontact record-sets update askseaman.com. --type="A" --zone="askseaman" --rrdatas="34.120.76.214" --ttl="300"
gcloud dns --project=seacontact record-sets update api.askseaman.com. --type="A" --zone="askseaman" --rrdatas="34.120.76.214" --ttl="300"
gcloud dns --project=seacontact record-sets update '*.askseaman.com.' --type="A" --zone="askseaman" --rrdatas="34.120.76.214" --ttl="300"

```


# TODO:
- set up github pipelines to automatically update deployment
- set up secrets and environments in k8/gcp
- set up static files storages (images, db cache)
