import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Interessado = db.define('interessado', {
   id_interessado: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nome_interessado: {
        type: DataTypes.STRING(100)
    },
    turno_interessado: {
        type: DataTypes.STRING(100)
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Interessado;
