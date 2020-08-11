FROM node:lts-alpine

WORKDIR /app
COPY package.json /app
RUN npm install

COPY . /app
RUN npm run build

ENV HOST 0.0.0.0

CMD [ "npm", "run", "start" ]
