import {IResolvers} from "graphql-tools";

const query: IResolvers = {
    Query:{
        hola(): string{
            return 'Hello world';
        },
        holaConNombre(__: void, { nombre }): string{
            return `Hello wolrd ${nombre}`;
        },
        holaAlCursoGraphQL(): string{
            return 'Welcome to GraphQL course'
        }
    }
}


export default query;
