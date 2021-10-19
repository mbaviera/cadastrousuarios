CREATE DATABASE testedevelcode;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    nascimento DATE,
    foto BYTEA
);

/* INSERT INTO users ( nome, nascimento, foto)
    VALUES ( 'Mateus Rocha', '1991-09-12', 'teste');

select * from users; */