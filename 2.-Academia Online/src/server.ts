import express from 'express';
import compression from 'compression';
import cors from 'cors'; // para pryectos de angular
import {ApolloServer} from "apollo-server-express";
import {createServer} from "http";
import schema from "./schema";
import expressPlayGround from 'graphql-playground-middleware-express';


const app = express();

app.use('*', cors());

app.use(compression());


const server = new ApolloServer({
    schema,
    introspection: true
})
server.applyMiddleware({app});

app.use('/', expressPlayGround({
    endpoint: "/graphql"
}))

const PORT = 5302;
const httpServer = createServer(app);

httpServer.listen(
    {  port: PORT },
    ()=> console.log(`Hola mundo API GraphQL http://localhost:${PORT}`)
    );

