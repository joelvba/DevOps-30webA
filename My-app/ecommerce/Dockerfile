FROM node:18-alpine
RUN mkdir -p /home/app
COPY . /home/app
COPY package.json ./
RUN npm install
EXPOSE 3000
CMD ["node", "/home/app/index.html"]
