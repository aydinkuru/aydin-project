FROM node:16.15.0-alpine3.15

RUN npm install -g nodemon

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD bin ./bin

CMD [ "nodemon" ]
