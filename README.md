# Escopo e objetivo

Projeto desenvolvido como desafio técnico. <br/>
Consiste de uma aplicação React Native para CRUD de usuários, com backend desenvolvido em Node.js e banco de dados Postgresql.<br/><br/>

<p align="center">
  <img src="https://i.ibb.co/8XfRMQw/Screenshot-2021-10-19-09-50-50-552-com-testedevelcode.jpg" width="300" title="hover text">
  <img src="https://i.ibb.co/Prp9Sxd/1634647881348.jpg" width="300" title="hover text">
  <img src="https://i.ibb.co/SRznbMn/1634647881331.jpg" width="300" title="hover text">
</p> 

## Como Executar

- Banco<br/>
  Postgresql<br/>
  Há um backup dentro da pasta 'banco', ou execute as QUERIES mostradas em 'backend > database > database.sql'

- Backend:<br/>
Acesse a pasta backend no terminal.<br/>
Instale as dependencias com o comando: npm install<br/>
Para executar o servidor digite o comando: npm run dev<br/>
Ele poderá ser acessado através do link https://localhost:3000

- FrontEnd:<br/>
Acesse a pasta 'testedevelcode' no terminal.<br/>
Instale as dependencias com o comando: npm install<br/>
Para rodar em modo debug execute o comando: react-native run-android <br/>
Para gerar um apk execute o comando: react-native run-android --variant-release

## Troubleshooting

- Configuração do hostname e porta no backend<br/>
  Acesse o arquivo index.js em 'backend > src > index', e altera as variáveis hostname e port. Por padrão esta setado hostname = localhost" e port = "3000"
  
- Configuração da URL frontend<br/>
  Acesso o arquivo Api.js em 'frontend > testedevelcode > src > services', e altera a variável baseURL. Por padrão esta setado baseURL: 'http://localhost:3000',
