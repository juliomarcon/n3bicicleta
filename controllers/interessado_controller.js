import interessado from "../models/interessado_model.js"

export const getInteressados = async (req, res) => {
    try {
        const interessados = await interessado.findAll()
        res.send(interessados)
    } catch (e) {
        console.log("Erro ao acessar a tabela Interessado", e)
    }
}

export const createInteressado = async (req, res) => {
    try {
        await interessado.create(req.body)
        res.json({
            message: "Um novo registro de interessado foi inserido no Banco de dados"
        })
    } catch (e) {
        console.log("Erro ao Inserir um novo interessado", e)
    }
}

export const updateInteressado = async (req, res) => {
    try {
        const { id } = req.params
        const [updatedRows] = await interessado.update(req.body, {
            where: { id: id }
        })
        if (updatedRows === 0) {
            return res.status(404).json({ error: `Não foi possível encontrar o interessado com o ID ${id}` })
        }
        res.json({ message: "Interessado atualizado com sucesso" })
    } catch (e) {
        console.log("Erro ao atualizar o interessado", e)
        res.status(500).json({ error: "Erro ao atualizar o interessado" })
    }
}

export const deleteInteressado = async (req, res) => {
    try {
        const { id } = req.params
        const deletedRows = await interessado.destroy({
            where: { id: id }
        })
        if (deletedRows === 0) {
            return res.status(404).json({ error: `Não foi possível encontrar o interessado com o ID ${id}` })
        }
        res.json({ message: "Interessado removido com sucesso" })
    } catch (e) {
        console.log("Erro ao deletar o interessado", e)
        res.status(500).json({ error: "Erro ao deletar o interessado" })
    }
}
