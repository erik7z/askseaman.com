# askseaman.com
Questions &amp; answers platform for Seamans, built with GraphQL, Apollo, React, Neo4j and Typescript

To start working with this Q&A platform you need to have docker & docker-compose installed on your machine.

Once you ready write: 
```
git clone https://github.com/erik7z/askseaman.com.git
```

create .env file in the project root and update variables up to your environment:

```
NEO4J_AUTH=neo4j/letmein
NEO4J_URI=bolt://db:7687
NEO4J_USER=neo4j
NEO4J_PASSWORD=letmein
NEO4J_ENCRYPTED=ENCRYPTION_ON
GRAPHQL_SERVER_PORT=4000
GRAPHQL_SERVER_PATH=/
GRAPHQL_SERVER_HOST=api
JWT_SECRET=askseamansecret
JWT_EXPIRY=7d
DEFAULT_ROLE=reader
HOST_URI=api:4000
AUTH_LOGIN_UI_URI=/auth
AUTH_VERIFY_CODE_URI=/auth/verify
AUTH_CONFIRM_CODE_UI_URI=/auth/confirm-code
AUTH_CHANGE_PASS_UI_URI='/auth/change-pass?code='
AUTH_NEW_PASS_UI_URI='/auth/new_pass'
CLOUD_NAME=***CLOUDINARY_LOGIN***
CLOUD_API_KEY=***CLOUDINARY_API_KEY***
CLOUD_API_SECRET=***CLOUDINARY_API_SECRET***
CLOUD_IMG_FOLDER=askseaman/
NGINX_HOST=localhost
NGINX_PORT=80

```

Then build up project with:
```
docker-compose build
```

And run it with:
```
docker-compose up
```

After all files succesfully generated and client build completed, project will be available your localhost.

