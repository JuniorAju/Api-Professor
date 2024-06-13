const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
openapi: '3.0.0',
info: {
title: 'Api Professor',
version: '1.0.0',
description: 'Descrição da Minha API de Professores',
},
};

const options = {
swaggerDefinition,
apis: ['./src/app/routes/*.js'], // Path to the API routes in your Node.js application
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

