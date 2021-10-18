# Escopo e objetivo

Projeto desenvolvido como teste prático pra empresa Develcode. Consiste de uma aplicação React Native para CRUD de usuários, com backend desenvolvido em Node.js e banco de dados Postgresql.

## Como Executar

- Backend:
Acesse a pasta backend no terminal.
Instale as dependencias com o comando: npm install
Para executar o servidor digite o comando: npm run dev
Ele poderá ser acessado através do link https://localhost:3000

- FrontEnd:
Acesse a pasta 'testedevelcode' no terminal.
Instale as dependencias com o comando: npm install
Para rodar em modo debug execute o comando: react-native run-android 
Para gerar um apk execute o comando: react-native run-android --variant

## Troubleshooting

- Configuração do hostname e porta no backend
  Acesso a pasta backend e o arquivo index.js, e altera as variáveis hostname e port. Por padrão esta setado hostname = localhost" e port = "3000"
  
- Configuração do hostname e porta no frontend
  Acesso o arquivo Api.js em 'frontend > testedevelcode > src > services', e altera a variável baseURL. Por padrão esta setado baseURL: 'http://localhost:3000',
