
CREATE TABLE bicicletas (
  id_bicicleta INT PRIMARY KEY,
  nome_bicicleta VARCHAR(100),
  id_interessado INT,
  id_quadrodabicicleta INT,
  FOREIGN KEY (id_interessado) REFERENCES interessados(id),
  FOREIGN KEY (id_quadrodabicicleta) REFERENCES quadrodabicicleta(id)
);

CREATE TABLE interessados (
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100)
);

CREATE TABLE quadrodabicicleta (
  id INT PRIMARY KEY,
  modelo VARCHAR(100),
  fabricante VARCHAR(100)
);
