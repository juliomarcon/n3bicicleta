import express from "express";
import cors from "cors";
import db from "./config/database.js";
import quadrodabicicletaRota from "./routers/quadrodabicicleta_routes.js";
import interessadoRota from "./routers/interessado_routes.js";
import bicicletaRota from "./routers/bicicleta_routes.js";

import Bicicleta from "./models/bicicleta_model.js";
import QuadroDaBicicleta from "./models/quadrodabicicleta_model.js";
import Interessado from "./models/interessado_model.js";

const server = express();
server.use(express.json());
server.use(cors());

try {
  await db.authenticate();
  console.log("Conexão com o MySQL estabelecida!");
} catch (e) {
  console.log("Conexão com o MySQL não estabelecida", e);
}

Bicicleta.associate = (models) => {
  Bicicleta.belongsTo(models.Interessado, {
    foreignKey: "id_interessado",
    as: "interessado",
  });

  Bicicleta.belongsTo(models.QuadroDaBicicleta, {
    foreignKey: "id_quadrodabicicleta",
    as: "quadrodabicicleta",
  });
};

server.use(quadrodabicicletaRota);
server.use(interessadoRota);
server.use(bicicletaRota);
server.listen(5000, () => console.log("Server executando em http://localhost:5000"));
