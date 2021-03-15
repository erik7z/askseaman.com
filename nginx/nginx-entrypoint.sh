#!/usr/bin/env sh
set -eu

echo "#### nginx-entrypoint.sh >>>> replacing nginx config variables >>>>"

envsubst '${NGINX_HOST} ${NGINX_PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

exec "$@"