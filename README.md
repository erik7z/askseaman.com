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

- Set up storage disk:
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

# SFTP to instance, copy all necessary files and then unmount and detach disk

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
gcloud compute disks describe ez-disk | grep selfLink #take part starting from project
```









# TODO:

!- add deployment instructions

- deploy askseaman to gcloud k8 cluster
  - volumes
  - set up dns for new ingress
- set up github pipelines to automatically update deployment
- set up secrets and environments in k8/gcp
- set up static files storages (images, db cache)
