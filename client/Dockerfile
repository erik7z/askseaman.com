FROM node:14 as build-stage

RUN mkdir -p /client
WORKDIR /client

COPY package.json /client
COPY package-lock.json /client

RUN npm ic
COPY . /client

ARG REACT_APP_GRAPHQL_HOST
ARG REACT_APP_GRAPHQL_PORT
ENV REACT_APP_GRAPHQL_HOST $REACT_APP_GRAPHQL_HOST
ENV REACT_APP_GRAPHQL_PORT $REACT_APP_GRAPHQL_PORT

RUN echo $REACT_APP_GRAPHQL_HOST
RUN echo $REACT_APP_GRAPHQL_PORT

RUN npm run build

FROM nginx:1.19

COPY --from=build-stage /client/build/ /usr/share/nginx/html

COPY ./nginx/nginx.conf.template /etc/nginx/nginx.conf.template
COPY ./nginx/nginx-entrypoint.sh /

ARG NGINX_HOST
ARG NGINX_PORT
ENV NGINX_HOST $NGINX_HOST
ENV NGINX_PORT $NGINX_PORT

RUN echo $NGINX_HOST
RUN echo $NGINX_PORT

RUN ["chmod", "+x", "/nginx-entrypoint.sh"]
ENTRYPOINT ["/nginx-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
