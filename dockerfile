FROM node:18-alpine3.16 as base

WORKDIR /app

ADD package.json .
ADD yarn.lock .
RUN yarn

ADD . .

FROM base as production

RUN yarn build

CMD yarn start
