FROM node:lts-alpine
WORKDIR /src/app

RUN apk add --no-cache git build-base \
    libtool make curl

COPY package.json yarn.lock /src/app/
RUN yarn install

COPY . .
RUN yarn build

CMD [ "yarn", "start" ]