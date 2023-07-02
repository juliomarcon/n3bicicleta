import { Sequelize } from "sequelize";
import db from "../config/database.js"

const Bicicleta = db.define('bicicletas', {
    id_bicicleta: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nome_bicicleta: {
        type: Sequelize.STRING(100)
    },
    id_interessado: {
        type: Sequelize.INTEGER
    },
    id_quadrodabicicleta: {
        type: Sequelize.INTEGER
    },
},
{
    timestamps: false,
    freezeTableName: true
})

export default Bicicleta
