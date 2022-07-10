FROM node:14

RUN mkdir -p /api
WORKDIR /api
COPY package.json /api
COPY package-lock.json /api

RUN npm ic

COPY . /api
RUN ls
EXPOSE 4000

CMD ["npm", "start"]
