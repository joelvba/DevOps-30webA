/*
s
docker pull mongo
docker create -p27017:27017 --name monguito -e MONGO_INITDB_ROOT_USERNAME=joel -e MONGO_INITDB_ROOT_PASSWORD=password mongo
docker start monguito


version: '3'

services:
  mongo:
    image: mongo
    restart: always
    environment:
     - MONGO_INITDB_ROOT_USERNAME: joel
     - MONGO_INITDB_ROOT_PASSWORD: password


hello: 
  build:
    context: .
  volumes:
    - ./pages/api: /hello
  ports:
    - '3000:3000'
  depends_on:
   - 'mongo'
  environment:
    - MONGO_INITDB_ROOT_USERNAME:
    - MONGO_INITDB_ROOT_PASSWORD: 
    - ME_CONFIG_MONGODB_URL: mongodb://localhost/ecommerce-full-stack
    - ME_CONFIG_BASICAUTH: false


    FROM node:18-alpine
RUN mkdir -p /home/app
COPY . /home/app
COPY package.json ./
RUN npm install
EXPOSE 3000
CMD ["node", "/home/app/index.html"]



RUN mkdir -p /home/app
COPY . /home/app
EXPOSE 3000

*/