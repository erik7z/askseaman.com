#!/usr/bin/env sh
set -eu

envsubst '${NGINX_HOST} ${NGINX_PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

exec "$@"