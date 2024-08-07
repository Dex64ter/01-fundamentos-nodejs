# 01-fundamentos-nodejs
Aqui vamos entender um pouco de como funciona o Nodejs criando um servidor simples, mas sem utilização de frameworks por enquanto, vamos primeiramente criar uma estrutura básica de um servidor nodejs do zero.

## Iniciando no Node.js
O Node utiliza linguagem javascript como já é esperado mas ele antes de qualquer coisa é uma plataforma, não uma linguagem, que permite utilizar js no lado do servidor assim como outras linguagens já faziam.

> Uma utilização útil para ele é exatamente criar funcionalidades que não precisam ser feitas diretamente no browser.
    
### Criando projeto Node.js
Vamos iniciar algumas configurações, primeiro vamos entrar em uma pasta no seu vscode, ir ao terminal e digitar:
```npm init -y```
este comando inicia um novo servidor node o "-y" vai aceitar todas as perguntas de configuração que vierem com o comando "npm init". Ao final temos o arquivo `package.json` criado.

```json
{
  "name": "fundamentos-nodejs",
  "type": "module",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node src/server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

No arquivo package vão ser descritos alguns atributos do servidor node assim como é nele que serão listados todas as dependências da aplicação, ou seja, códigos e pacotes de biliotecas criadas por terceiros que serão utéis para utilização.

Para testar o node, criamos um arquivo `src/server.js` e dentro dele podemos colocar qualquer código javascript dentro dele. Como ele utiliza serviços pelo lado do servidor, algumas funções que são comuns ddo lado do browser não serão possíveis de serem usados como o `document.` ou `.querySelector`.

Finalmente só precisamos usar o comando `node src/server.js` e o código javascript dentro do arquivo irá funcionar.

**Importações no node**  
Para utilizarmos códigos de terceiros, ou seja, importar bibliotecas utilizamos o padrão de importação common-js que se utiliza do `require`:  

`const http = require('http')`
   
Outro padrão de importação o ESModule utiliza ofamoso `import/export` mas por padrão o node não suporta esse método de importação.  

No arquivo `package.json` basta colocar uma propriedade chamada `"type"` que possuirá dois valores possíveis o **commonjs** e o **module**, exatamente o que já foi explicado aqui. Especificando o module, conseguimos utilizar o estilo de importação `import/export`.

**Diferenciando módulo de terceiros e módulos do próprio node**  
Nas últimas versões do node, podemos colocar logo antes da importação da biblioteca padrão do node no prefixo node:
```js
import http from 'node:http'
```
Seguindo nessa biblitoeca padrão do node "http" vamos criar o nosso primeiro servidor http:

```js
// server.js
import http from 'node:http'

const server = http.createServer((req, res) => {
    return res.end("Hello World")
})

server.listen(3000);
```
No método `.createServer()` do *http* temos dois parâmetros que entraremos a fundo conforme o direcionamento dos estudos, o *req* e o *res*.

Basicamente o req (ou requisition) funciona para receber todas as requisições que são enviadas para o servidor. O res (ou response) serve para enviar uma resposta para quem fez a requisição ao servidor. 

Entendendo isso, iniciando o servidor node e acessando a url *localhost:3000* no seu navegador, veremos a mensagem enviada como resposta a requisição "Hello World" na página por causa do retorno  
```js
return res.end("Hello World")
``` 

### node --watch
A partir do momento em que executamos o servidor o código que ele irá executar será o mesmo independente de qualquer mudança na implementação, ele só executará um novo código se o servidor for finalizado e iniciado mais uma vez.

Para evitar essa atividade desnecessária, podemos digitar a flag "--watch" logo antes do arquivo servidor que será executado:
```cmd
node --watch src/server.js
```

## Estrutura da aplicação
### Rotas de criação e listagem (Métodos HTTP)