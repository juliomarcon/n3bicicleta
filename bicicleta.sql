CREATE TABLE interessados (
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100),
  telefone VARCHAR(11)
);

CREATE TABLE quadrodabicicleta (
  id INT PRIMARY KEY,
  tamanho_quadro INT
);

CREATE TABLE bicicletas (
  id INT PRIMARY KEY,
  nome_bicicleta VARCHAR(100),
  id_interessado INT,
  id_quadrodabicicleta INT,
  FOREIGN KEY (id_interessado) REFERENCES interessados(id),
  FOREIGN KEY (id_quadrodabicicleta) REFERENCES quadrodabicicleta(id)
);