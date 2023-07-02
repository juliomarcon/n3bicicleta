import bicicleta from "../models/bicicleta_model.js";
import interessado from "../models/interessado_model.js";
import quadrodabicicleta from "../models/quadrodabicicleta_model.js";
import { generateToken } from "../jwt.js";

// Função para realizar login e gerar o token JWT
export const login = (req, res) => {

  const userId = req.params;

  if (!userId) {
    res.status(400).json({ error: "É necessário o id do interessado." });
  }

  const token = generateToken(userId);
  res.status(200).json({ token: token });
};


export const getBicicletas = async (req, res) => {
    try {
        const bicicletas = await bicicleta.findAll()
        res.send(bicicletas)
    } catch (e) {
        console.log("Erro ao acessar a tabela Bicicletas", e)
        res.status(500).json({ error: "Erro ao acessar a tabela Bicicletas" })
    }
}

export const createBicicleta = async (req, res) => {
    const { id_interessado, id_quadrodabicicleta } = req.body
    const interessadoCad = await interessado.findByPk(id_interessado)
    const quadrodabicicletaCad = await quadrodabicicleta.findByPk(id_quadrodabicicleta)
    if (!interessadoCad) {
        return res.status(400).json({ error: `Não há interessado cadastrado com o código ${id_interessado}` })
    }

    if (!quadrodabicicletaCad) {
        return res.status(400).json({ error: `Não há quadro de bicicleta cadastrado com o ID ${id_quadrodabicicleta}` })
    }

    try {
        await bicicleta.create(req.body)
        res.json({
            message: "Um novo registro de bicicleta foi inserido no Banco de dados"
        })
    } catch (e) {
        console.log("Erro ao Inserir uma nova bicicleta", e)
        res.status(500).json({ error: "Erro ao inserir uma nova bicicleta" })
    }
}

export const deleteBicicleta = async (req, res) => {
    const { id } = req.params

    try {
        const bicicletaDeleted = await bicicleta.destroy({
            where: { id: id }
        })

        if (bicicletaDeleted) {
            res.json({ message: "Bicicleta removida com sucesso" })
        } else {
            res.status(404).json({ error: `Não foi possível encontrar a bicicleta com o ID ${id}` })
        }
    } catch (e) {
        console.log("Erro ao deletar a bicicleta", e)
        res.status(500).json({ error: "Erro ao deletar a bicicleta" })
    }
}

export const updateBicicleta = async (req, res) => {
    const { id } = req.params
    const { id_interessado, id_quadrodabicicleta } = req.body

    try {
        const bicicletaUpdated = await bicicleta.update(req.body, {
            where: { id: id }
        })

        if (bicicletaUpdated[0]) {
            res.json({ message: "Bicicleta atualizada com sucesso" })
        } else {
            res.status(404).json({ error: `Não foi possível encontrar a bicicleta com o ID ${id}` })
        }
    } catch (e) {
        console.log("Erro ao atualizar a bicicleta", e)
        res.status(500).json({ error: "Erro ao atualizar a bicicleta" })
    }
}
