CREATE DATABASE firstapi;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nascimento DATE,
    foto VARCHAR(100)
);

INSERT INTO users ( nome, nascimento, foto)
    VALUES ( 'Mateus Rocha', '1991-09-12', 'teste');

select * from users;