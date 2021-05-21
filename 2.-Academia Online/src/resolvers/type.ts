import { IResolvers} from "graphql-tools";
import {database} from "../data/data.store";
import _ from "lodash";

/**
 * este type es importante ya que si entramos a data/students.json el campo  "courses": [ "2" ] solo retorna el codigo del curso como tal
 * por ese motivo es necesartio traer la data de esta porfa, luego hay que agregar el el resolverMap
 *
 * lodash
 */
const type : IResolvers =  {
    Estudiante: {
        courses: parent =>{
            const listCouses: Array<any> = [];
            parent.courses.map( (curso: string)=>{
                listCouses.push(_.filter(database.cursos, ['id', curso ])[0])
            });

            return listCouses;
        }

    },
    Course:{
        students: parent =>{
           const listStudents: Array<any> = [];
           const idCurso = parent.id;
           database.estudiantes.map( (estudiante:any)=> {
               if( estudiante.courses.filter( (id:any)=> id===idCurso) > 0 ){
                   listStudents.push(estudiante);
               }
           });
           return listStudents;
        },
        path: parent => `https://www.udemy.com${parent.path}`
    }
    
}

export default type;

