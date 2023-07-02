import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const QuadroDaBicicleta = db.define('quadrodabicicleta', {
    tamanho_quadro: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default QuadroDaBicicleta;

