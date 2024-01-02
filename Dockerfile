FROM node:lts-slim

WORKDIR /usr/app

RUN apt-get update -y && apt-get install -y openssl

COPY package.json yarn.lock ./

RUN npm install yarn --global --force

RUN yarn install

COPY . .

EXPOSE 3000

RUN yarn prisma generate

ENTRYPOINT ["./entrypoint.sh"]
