const fs = require("fs")

function getTodosProfessores() {
    return JSON.parse(fs.readFileSync("professores.json"))
}

function getProfessorId(id) {
    const professores = JSON.parse(fs.readFileSync("professores.json"))

    const professorFiltrado =  professores.filter( professor => professor.id === id)

    return professorFiltrado
}

function insereProfessor(data) {
    const professores = JSON.parse(fs.readFileSync("professores.json"))
    
    const novaListaProfessores = [...professores, data]
    fs.writeFileSync("professores.json", JSON.stringify(novaListaProfessores))
}

function alteraProfessor(data, id) {
    let professores = JSON.parse(fs.readFileSync("professores.json"))
    const indiceMod  = professores.findIndex(professor => professsor.id === id)

    const conteudoMudado = { ...professores[indiceMod], ...data}
    professores[indiceMod] = conteudoMudado

    fs.writeFileSync("professores.json", JSON.stringify(professores))

}

function deleteFiles(id){
    let professores = JSON.parse(fs.readFileSync("professores.json"))

    const professoresFiltrados  = professores.filter(professor => professor.id !== id)

    fs.writeFileSync("professores.json", JSON.stringify(professoresFiltrados))


}


module.exports = {
    getTodosProfessores,
    getProfessorId,
    insereProfessor,
    alteraProfessor,
    deleteFiles
}