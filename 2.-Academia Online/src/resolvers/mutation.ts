import { IResolvers} from "graphql-tools";
import { database } from '../data/data.store';

const mutation : IResolvers =  {
   Mutation:{
       cursoNuevo( __: void, {_curso}): any{
           const itemCourse  = {
              ... _curso,
                id: String ( database.cursos.length + 1 )
           }
           database.cursos.push(itemCourse);
           return itemCourse;
       }
   }
} 

export default mutation;
