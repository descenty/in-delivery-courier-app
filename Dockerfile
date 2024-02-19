FROM node:latest

COPY yarn.lock package.json ./

RUN yarn

COPY . .

EXPOSE 4173

RUN yarn build

CMD ["yarn", "preview", "--host"]