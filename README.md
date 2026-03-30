# Node.js + Prisma API

## Tech stack

Node.js
Express
Prisma ORM
PostgreSQL

## How to run the server

### Install dependencies

npm i -D typescript ts-node nodemon @types/node
npm i express dotenv
npm i prisma@6.17 @prisma/client@6.17

### Setup enviroment variables

Create a .env file in the root

DATABASE_URL="your_database_connection_string"

### Setup database

npx prisma init
npx prisma migrate dev --name table_name
npx prisma generate
npx prisma db seed

### Start the server

npm run dev

## How to test routes

You can test the API using:

Postman
Insomnia
Hoppscotch

## Create user

POST /userLanguages

{ 
    "name": "Ayhan", 
    "email": "ayhan@mail.com", 
    "age": 25,
    "languages": "Swedish", "English"
}

## Get users

GET /userLanguages

## Update user

PUT /userLanguages/ayhan@mail.com

{ 
    "languages": "Turkish", "Bulgarian"
}