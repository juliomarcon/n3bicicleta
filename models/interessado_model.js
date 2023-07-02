import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Interessado = db.define('interessados', {
    nome: {
        type: DataTypes.STRING(100)
    },
    email: {
        type: DataTypes.STRING(100)
    },
    telefone: {
        type: DataTypes.STRING(11)
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Interessado;
