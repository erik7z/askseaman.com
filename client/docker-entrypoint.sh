#!/bin/bash
echo "#### docker-entrypoint.sh >>> installing client packages"
npm install
echo "#### docker-entrypoint.sh >>> preparing client build"
npm run build
echo "#### docker-entrypoint.sh >>> client build done"