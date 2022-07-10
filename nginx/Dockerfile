FROM nginx:1.19

COPY nginx.conf.template /etc/nginx/nginx.conf.template

COPY nginx-entrypoint.sh /
RUN ["chmod", "+x", "/nginx-entrypoint.sh"]
ENTRYPOINT ["/nginx-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
