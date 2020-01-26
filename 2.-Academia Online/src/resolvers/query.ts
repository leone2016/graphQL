import { IResolvers} from "graphql-tools";
import {database} from "../data/data.store";

const query : IResolvers =  {
    Query: {
        estudiantes(): any{
            return database.estudiantes;
        },
        student   (__: void, {id}): any{
            const defaultStudent = {
                id: '404',
                name: `student not found with the id: ${id}`,
                email: "",
                courses:[]
            }
            return database.estudiantes.filter( student => student.id === id )[0] || defaultStudent;
        },
        courses(): any{
            return database.cursos;
        },
        course   (__: void, {id}): any{
            
            return database.cursos.filter( curso => curso.id === id )[0] || [];
        },
    }
}

export default query;
