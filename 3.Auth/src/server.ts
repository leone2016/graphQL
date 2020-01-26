import express from 'express';
import compression from 'compression';
import cors from 'cors';
import schema from "./squema";
import {ApolloServer} from "apollo-server-express";
import {createServer} from "http";


const app = express();

app.use('*', cors());

app.use(compression());

//se puede comprimir a schema
const server = new ApolloServer({
    schema,
    introspection: true
})
server.applyMiddleware({app});

app.use('/', (re, res)=> { 
    res.send('Hello world, Welcome to GraphQL course');
})

const PORT = 5301;
const httpServer = createServer(app);

httpServer.listen(
    {  port: PORT },
    ()=> console.log(`Hola mundo API GraphQL http://localhost:${PORT}/graphql`)
    );

