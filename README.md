# Node.js + Prisma API

## Tech stack

Node.js
<br/>
Express
<br/>
Prisma ORM
<br/>
PostgreSQL

## How to run the server

### Install dependencies

npm i -D typescript ts-node nodemon @types/node
<br/>
npm i express dotenv
<br/>
npm i prisma@6.17 @prisma/client@6.17

### Setup enviroment variables

Create a .env file in the root

DATABASE_URL="your_database_connection_string"

### Setup database

npx prisma init
<br/>
npx prisma migrate dev --name table_name
<br/>
npx prisma generate
<br/>
npx prisma db seed

### Start the server

npm run dev

## How to test routes

You can test the API using:

Postman
<br/>
Insomnia
<br/>
Hoppscotch

## Create user

POST /userLanguages

{
<br/>
    "name": "Ayhan", 
    "email": "ayhan@mail.com", 
    "age": 32,
    "languages": "Swedish", "English"
<br/>
}

## Get users

GET /userLanguages

## Update user

PUT /userLanguages/ayhan@mail.com

{ 
    "languages": "Turkish", "Bulgarian"
}
