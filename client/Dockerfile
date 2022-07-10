FROM node:14

RUN mkdir -p /client
WORKDIR /client

COPY package.json /client
COPY package-lock.json /client

RUN npm ic
COPY . /client
RUN npm run build
