/**
 * @swagger
 * components:
 *   schemas:
 *     Professores:
 *       type: object
 *       required:
 *         - id
 *         - nome
 *       properties:
 *         id:
 *           type: integer
 *           description: id auto gerado no momento da criação do Professor 
 *         nome:
 *           type: string
 *           description: título do Professor
 *         createdAt:
 *           type: string
 *           format: date
 *           description: data de criação do Professor
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: data de atualização do Professor
 *       example:
 *         id: 1
 *         nome: Teste Professor 1
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         updatedAt: 2020-03-10T04:05:06.157Z
 */

// const { Router } = require("express")
const express = require("express");
const { findAll, findProfessor, addProfessor, updatedProfessor, deleteProfessor }
 = require("../controllers/professor");


const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Rotas dos Professores
 *   description: Todas as rotas da API dos Professores
 * /professores:
 *   get:
 *     summary: Listar todos os Professores
 *     tags: [Consulta Todos os Professores]
 *     requestBody:
 *     responses:
 *       200:
 *         description: sucesso ao listar os Professores.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Professores'
 *       500:
 *         description: Some server error
 *
 */
router.get("/professores", findAll);
/**
 * @swagger
 * /Professores/{id}:
 *   get:
 *     summary: Obtém um professor pelo ID
 *     tags: [Consulta professor por ID]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dados do professor
 *       404:
 *         description: professor não encontrado
 *       500:
 *         description: Erro ao obter o professor
 */
router.get("/professores/:id", findProfessor);
/**
 * @swagger
 * /Professores:
 *   post:
 *     summary: Adiciona um novo Professor
 *     tags: [Adicionar um novo Professor]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       201:
 *         description: Professor adicionado com sucesso
 *       400:
 *         description: Título, autor, ano e preço são campos obrigatórios
 *       500:
 *         description: Erro ao salvar os dados
 */
router.post("/Professores", addProfessor);
/**
 * @swagger
 * /Professores/{id}:
 *   put:
 *     summary: Atualiza um Professor pelo ID
 *     tags: [Atualiza um Professor pelo ID]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       200:
 *         description: Professor atualizado com sucesso
 *       404:
 *         description: Professor não encontrado
 *       500:
 *         description: Erro ao atualizar o Professor
 */
router.put("/Professores/:id", updatedProfessor);
/**
 * @swagger
 * /Professores/{id}:
 *   delete:
 *     summary: Remove um Professor pelo ID
 *     tags: [Remove um Professor pelo ID]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Professor removido com sucesso
 *       404:
 *         description: Professor não encontrado
 *       500:
 *         description: Erro ao remover o Professor
 */
router.delete("/professores/:id", deleteProfessor);


module.exports = router
