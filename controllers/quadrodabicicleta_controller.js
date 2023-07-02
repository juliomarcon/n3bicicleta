import quadrodabicicleta from "../models/quadrodabicicleta_model.js"

// Busca todos os quadros de bicicleta registrados na tabela quadrodabicicleta
// por meio do método findAll
export const getQuadrosBicicleta = async (req, res) => {
    try {
        const quadrosBicicleta = await quadrodabicicleta.findAll()
        res.send(quadrosBicicleta)
    } catch (e) {
        console.log("Erro ao acessar a tabela QuadrosBicicleta", e)
        res.status(500).json({ error: "Erro ao acessar a tabela QuadrosBicicleta" })
    }
}

// Insere registros na tabela quadrodabicicleta por meio do método create
export const createQuadroBicicleta = async (req, res) => {
    try {
        await quadrodabicicleta.create(req.body)
        res.json({
            message: "Um novo registro de quadro de bicicleta foi inserido no Banco de dados"
        })
    } catch (e) {
        console.log("Erro ao Inserir um novo quadro de bicicleta", e)
        res.status(500).json({ error: "Erro ao inserir um novo quadro de bicicleta" })
    }
}

// Atualiza registros da tabela quadrodabicicleta por meio da função update
export const updateQuadroBicicleta = async (req, res) => {
    try {
        await quadrodabicicleta.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            message: "Quadro de bicicleta atualizado com sucesso"
        })
    } catch (e) {
        console.log("Erro ao atualizar o quadro de bicicleta", e)
        res.status(500).json({ error: "Erro ao atualizar o quadro de bicicleta" })
    }
}

// Exclui registros da tabela quadrodabicicleta por meio da função destroy
export const deleteQuadroBicicleta = async (req, res) => {
    try {
        await quadrodabicicleta.destroy({
            where: { id: req.params.id }
        })
        res.json({
            message: "Quadro de bicicleta removido com sucesso"
        })
    } catch (e) {
        console.log("Erro ao excluir o quadro de bicicleta", e)
        res.status(500).json({ error: "Erro ao excluir o quadro de bicicleta" })
    }
}
