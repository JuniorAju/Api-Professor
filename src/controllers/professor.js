const clientProfessor = require("../Model/professorModel");


async function findAll(req, res){
const professor = await clientProfessor.findAll();
res.json(professor);
}

async function findProfessor(req, res){
    const id = req.params.id;
    const professor = await clientProfessor.findByPk(id);
    res.json(professor);
}

async function addProfessor(req, res){
    //console.log(req.body);
    //res.json("od");
    //console.log(req.body);
    //const  nome  = req.body;
    //const professor = await clientProfessor.create({ nome });
    console.log("*********************************")
    //console.log(JSON.stringify(req.body.nome))
    const professor = await clientProfessor.create({
         
       nome: req.body.nome
   });
     if(professor){
        res.json(professor);
     }
}

async function updatedProfessor(req, res){
    console.log(req)
    await clientProfessor.update({
        nome: req.body.nome
    },
    { where: {
            id: req.params.id,
        }
    }
    );
    let professor = clientProfessor.findByPk(req.params.id);
    res.json(professor);
}

async function deleteProfessor(req, res){
    await clientProfessor.destroy({
        where : {
            id: req.params.id,
        }
    });

    let professores = clientProfessor.findAll();
    res.json(professores);
}


module.exports = {
    findAll, findProfessor, addProfessor, updatedProfessor, deleteProfessor
}

// const { getTodosLivros, 
//     getLivroId, 
//     insereLivro, 
//     alteraLivro,
//     deleteFiles } = require("../services/livro");

// function getLivros(req, res) {
// try {
//     const livros = getTodosLivros()
//     res.json(livros);
// } catch (error) {
//     res.status(500)
//     res.send(error.menssage)
// }
// }

// function getLivro(req, res) {
// try {
//     const id = req.params.id
//     if(!id || !Number(id)){
//         res.status(422)
//         res.send("Id inválido!")
//     }
//         const livro = getLivroId(id)
//         res.send(livro)
    
// } catch (error) {
//     res.status(500)
//     res.send(error.menssage)
// }
// }

// function postLivro(req, res) {
// try {
//     const data = req.body;
//     if (req.body.nome) {
//         insereLivro(data)
//         res.status(201)
//         res.send("Livro inserido com sucesso!")   
//     }
//     res.status(422)
//     res.send("O campo nome é obrigatório!")
    
// } catch (error) {
//     // console.log(error);
//     res.status(500)
//     res.send(error.message)
// }
// }

// function alterarLivro(req, res){
// try {
//     const id = req.params.id
//     const data = req.body
//     if(!id || !Number(id)){
//         res.status(422)
//         res.send("Id inválido!")
//     }

//     alteraLivro(data, id)
//     res.send("livros modificados com sucesso!!!")
// } catch (error) {
//     res.status(500)
//     res.send(error.menssage)
// }
// }
// function removerLivro(req, res) {
// try {
//     const id = req.params.id

//     if(!id || !Number(id)){
//         res.status(422)
//         res.send("Id inválido!")
//     }
//     deleteFiles(id)
//     res.status(200)
//     res.send("livro removido com sucesso!!!")

// } catch (error) {
//     res.status(500)
//     res.send(error.menssage)
// }

// }


// module.exports = {
// getLivros,
// getLivro,
// postLivro,
// alterarLivro,
// removerLivro
// }