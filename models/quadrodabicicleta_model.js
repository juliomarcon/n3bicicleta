import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const QuadroDaBicicleta = db.define('quadrodabicicleta', {
    id_quadrodabicicleta: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    tamanho_quadro: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default QuadroDaBicicleta;

