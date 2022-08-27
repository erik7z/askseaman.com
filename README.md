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

# uncomment appropriate line for client image (local or production) in docker-compose.yml

# wind up the project:
docker-compose up --force-recreate 
```

After all files succesfully generated and client build completed, project will be available your localhost.


