FROM node:16.15.0-alpine3.15

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD public ./public
ADD .browserslistrc .prettierrc .eslintrc.js babel.config.js vue.config.js ./

CMD ["npm", "run", "serve"]