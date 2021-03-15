FROM node:14

RUN mkdir -p /client
WORKDIR /client

COPY docker-entrypoint.sh .
RUN ["chmod", "+x", "./docker-entrypoint.sh"]

# COPY package*.json ./
# RUN npm install
# COPY . .
# ARG REACT_APP_GRAPHQL_HOST
# ENV REACT_APP_GRAPHQL_HOST $REACT_APP_GRAPHQL_HOST
# ARG REACT_APP_GRAPHQL_PORT
# ENV REACT_APP_GRAPHQL_PORT $REACT_APP_GRAPHQL_PORT
# RUN npm run build
# VOLUME /client