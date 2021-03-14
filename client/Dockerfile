FROM node:14

RUN mkdir -p /client
WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

ARG REACT_APP_HOST_IP_ADDRESS

ENV REACT_APP_HOST_IP_ADDRESS $REACT_APP_HOST_IP_ADDRESS

RUN npm run build