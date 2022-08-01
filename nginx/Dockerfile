FROM nginx:1.19

COPY nginx.conf.template /etc/nginx/nginx.conf.template
COPY nginx-entrypoint.sh /

ARG NGINX_HOST
ARG NGINX_PORT
ENV NGINX_HOST $NGINX_HOST
ENV NGINX_PORT $NGINX_PORT

RUN echo $NGINX_HOST
RUN echo $NGINX_PORT

RUN ["chmod", "+x", "/nginx-entrypoint.sh"]
ENTRYPOINT ["/nginx-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
