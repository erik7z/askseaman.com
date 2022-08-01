# 28.07.22

gcloud container clusters update sc --update-addons=GcePersistentDiskCsiDriver=ENABLED --region=us-east4
gcloud compute disks create seacontact-disk --size 32 --type pd-ssd
gcloud compute disks list

# 18.07.22
## setting up k8 for askseaman/sc:

```shell
gcloud auth login // login to gcloud (nguita.erik@gmail.com)

# created cluster sc with a minimum nodes and in cheap region:
gcloud container clusters create sc --region us-east4 --num-nodes 1

# getting kubernetes credentials:
gcloud container clusters get-credentials sc --region us-east4


# listing contexts:
kubectl config get-contexts

kubectl config use-context {context-name}

# list cluster nodes (instances)
kubectl get nodes 
```

## RESULTS:
- created again cluster sc
- checked creation deployments api & neo4j, setted up load balancer type of connection

# 10.07.22

## RESULTS
- created test cluster:
sc    us-east1  1.22.8-gke.202  34.75.165.92  e2-medium     1.22.8-gke.202  3          RUNNING
- setted up deployments yaml for api & neo4j (not finished networking)
- deleted above cluster 
