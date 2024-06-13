const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const professorRoute = require('./routes/professor');

app.use('/', professorRoute);


db.sync(() => console.log(`O serviço de banco de dados está conectado`));


const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "API de Professores",
      version: "0.1.0",
      description: "API de Professores",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Ednilson Santos Barreto Junior",
        //url: "https://ednilsonsantos.com.br",
        email: "juniorsantos@ednilsonsantos.com.br",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["D:/Pasta Pc Antigo/FANESE/Tópicos avançados em desenvolvimento Web/Api Professor/src/routes/*.js"],
};

const specs = swaggerJsdoc(options);


app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    explorer: true,
    // customCssUrl:
      // "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css",
  })
);

  module.exports = app;
