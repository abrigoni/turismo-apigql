import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import expressGraphQL from "express-graphql";
import cors from "cors";
import schema from './schemas';


const app = express();

/* Middlewares */
app.use(cors());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

/* Ruta default */
app.get('/', (req, res) => {
  res.send('GraphQL API');
});

createConnection().then((connection) => {
  console.log("Conexion creada")
  app.listen(4000, () => console.log('Server running on port 4000'));
  
}).catch(error => console.log(error));