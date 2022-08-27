# 01.08.22

Set up load balancing & dns
```shell
# Applied contour ingress controller:
kubectl apply -f https://projectcontour.io/quickstart/contour.yaml

# created dns records:
gcloud dns --project=seacontact record-sets create askseaman.com. --type="A" --zone="askseaman" --rrdatas="35.245.73.170" --ttl="300"
gcloud dns --project=seacontact record-sets create *.askseaman.com. --type="A" --zone="askseaman" --rrdatas="35.245.73.170" --ttl="300"
```
