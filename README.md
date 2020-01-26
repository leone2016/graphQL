<p align="center">
  <a href="#" target="blank"><img src="https://graphql.org/img/logo.svg" width="320" alt="Nest Logo" /></a>
</p>

# GrapQL Course

## section 1 Introduction to the Course 
[Vscode Extensions](https://github.com/leone2016/VScode)

## seccion 2: Introduction to GrapQL 
[API star wars- REST](https://swapi.co/)

[API star wars- GraphQL](https://swapi.apis.guru/)

* name
* birthDay
* place birthday
* movies which Luke Skywalker appears

example
````Json
{
  person(personID: 1) {
    name
    birthYear
    homeworld {
      name
    }
    filmConnection {
      films {
        title
      }
    }
  }
}

````

### The importance of schema graphQL 

* It's the core of any implementation of graphql server
* Without this, it's no possible to buil an api of grapql
* It's the hard part of the proyect 
* We distance of the philosophy of the Apis rest 

### The schema of GraphQL it is defined and designed by:

* The types of directives that admit 
* the types of root operation that admit
    * Query: sql queries 
    * Mutation: DB modification
    * Subscription: real time listening on server
* The types of root determine the place inside sistem of types where it begin this operation
* Must be provided a root operation  and most be of type object
* **MUTATION AND SUBSCRIPTION** are opcional, ( type OBJECT )
  
# General Set of conventions 
 * Although it is flexible, it is recommendable to follow some conventions
   * Fields in **camelCase**
   * Types in **PascalCase**
   * Enums - Type name **PascalCase** / values in **ALL_CAPS**

## Sección 3: Construyendo esquemas a travez de tipos  TYPE SYSTEM

### Tipos escalares
* Datos primitivos que pueden almacenar un solo valor 
* conlos tipos de objetos y tipo de raiz imprescindibles
* define mayoríia de las propiedades de las entidades
 
### Tipos Predeterminados
* int
* float
* string
* boolean
* ID: identidicador único, de tipo Int o String

### sintaxis de un scalar 

nombreDeLaPropiedad: tipoDeData

Eg



### sintaxis personalizados

* se define en el schema.graphql ->( scalar MyScalarPersonalizado)
* Añadir en el resolver de tipos
  * Implementar con el GraphQLScalarType
  * Definir las propiedades parseValue, serialize y parseLiteral (no va el el curso)

### tipos de objetos

* entidades con las que modelamos y estructuramos los servicios
* objetos personalizados que de

# sección 3: GraphQL - Type system, squemas atravez de tipos

  Recursos 

[breaking-bad API](https://breaking-bad-voting.herokuapp.com/)

### Fragments
Fragment son los elementos que nos permiten simplificar las consultas definiendo en un bloque una colección de datos a recuperar sin tener que indicar los individualmente lo que resulta muy útil para no repetir el mismo grupo de datos una y otra vez.

Si se utiliza más de una consulta que es como el caso que estamos trabajando aquí podéis ver que tenemos tres consultas con la misma con las mismas propiedades tanto Walter Yesi y Jan tienen las mismas propiedades y con el fragment vamos a conseguir que no tengamos que escribir una y otra vez estas propiedades.

````consola
{
  walter: character(id: "1") {
    id
    name
    actor
    photo
  }
  Jessy: character(id: "2") {
    id
    name
    actor
    photo
  }
  skyler: character(id: "3") {
    id
    name
    actor
    photo
  }
}

````

### Con fragment

````consola
{
  walter: character(id: "1") {
    ...personajesFragment
  }
  Jessy: character(id: "2") {
    ...personajesFragment
  }
  skyler: character(id: "3") {
    ...personajesFragment
  }
}
fragment personajesFragment on Character {
  id
  name
  actor
  photo
}

````

### Query Variable

````consola
query personajesQuery($walter: ID!, $Jessy: ID!, $skyler: ID!){
  walter: character(id: $walter) {
    ...personajesFragment
  }
  Jessy: character(id:  $Jessy) {
    ...personajesFragment
  }
  skyler: character(id: $skyler) {
    ...personajesFragment
  }
}
fragment personajesFragment on Character {
  id
  name
  actor
  photo
}

````

> QUERY VARIABLES

````consola
{
  "walter": 1,
  "Jessy": 2,
  "skyler": 3
}
````
### Mutation

````consola
mutation addVote( $id: ID!){
  addVote(character: $id){
    id
    status
    message

  }
  
}
````

> QUERY VARIABLES - mutation
````consola
{
  "id": "2"
}
 ````

 ### Include / Skip 
````consola
query getCharacter($mostrarActor: Boolean!){
  characters{
    id,
    name,
    actor @include (if: $mostrarActor)
  }
}
````
> QUERY VARIABLES - include
````consola
{
  "mostrarActor": false
}
````
# Sección 5: Proyecto1 - Hola mundo

### Crear / configurar los ficheros
    $ npm init
    $ npx tsc --init --rootDir src --outDir build --lib dom,es6 --module commonjs --removeComments --target es6

### instalacion de dependencias 

* [express](https://www.npmjs.com/package/express)
* [express-graphql](https://www.npmjs.com/package/express-graphql)
* [graphql](https://www.npmjs.com/package/graphql)
* [graphql-import-node](https://www.npmjs.com/package/graphql-import-node)
* [compression](https://www.npmjs.com/package/compression)
* [cors](https://www.npmjs.com/package/cors)
* [typescript]()
* [graphql-tools](https://www.npmjs.com/package/graphql-tools)
* [graphql-playground-middleware-express](https://www.npmjs.com/package/graphql-playground-middleware-express)

### Dependencias de producción:

    $ npm install express express-graphql graphql ncp http graphql-import-node compression cors typescript graphql-tools graphql-playground-middleware-express

### Dependencias de desarrollo:
    $ npm install @types/compression @types/express @types/cors @types express-graphql @types/node @types/graphql -D

## API DE GRAPHQL CON APOLLO SERVER EXPRESS 

desinstalar las dependencias de express graphql

    $ npm uninstall express-graphql
    $ npm i apollo-server-express
    
    
# Section 6: Academia Online
    $ npm init
        package name: academia-online
        version: (1.0.0)
        description: Api graphQL academia online
        entry point: (index.js) build/server.js
        text command:
        gir repository: 
        keywords:
        author: Leonardo Medina <leomedinae.sc@gmail.com> (leonardomeidna.com.ec)
    $ npx tsc --init --rootDir src --outDir build --lib dom,es6 --module commonjs  --target es6 --removeComments --resolveJsonModule

### Dependencias de producción:
    $ npm install express graphql ncp http graphql-import-node compression cors lodash typescript graphql-tools graphql-playground-middleware-express apollo-server-express
###Dependencias de desarrollo:
    $ npm install @types/compression @types/express @types/cors @types/lodash @types/node @types/graphql -D


## COSAS RANDOM 

https://www.npmjs.com/package/class-validator

    netstat -ano | findstr :yourPortNumber
    taskkill /PID typeyourPIDhere /F