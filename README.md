## Installation Step's

```
nest n <>
nest start --watch
npm i @nestjs/graphql apollo-server-express graphql-tools
nest g module messages
```

## GraphQL Queries And Mutations

```
goto : http://localhost:3000/graphql

query A{
  messages{
    id
    desc
  }
}

mutation B{
  createMessage(desc:"abcd"){
    id 
  }
}

mutation C{
  clear{
    id
  }
}
```

## Dockerfile

```
FROM node:12.13-alpine

WORKDIR /app

COPY package*.json ./

RUN npm run install

COPY .  .

RUN npm run build

CMD ["node","dist/main"]
```

```
https://medium.com/@shaibenshimol/nestjs-and-mysql-in-10-minutes-711e02ec1dab 

FROM node:12.13-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:12.13-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
```