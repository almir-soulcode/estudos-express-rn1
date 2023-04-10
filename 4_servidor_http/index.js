const http = require("http");
const os = require("os");
const cpf = require("cpf");

const host = "localhost";
const porta = 3000;

const servidor = http.createServer((requisicao, resposta) => {
  console.log("Requisição ocorreu!");
  // O que eu quero responder para quem fez a solicitação
  resposta.write("<h1>Informacoes do sistema</h1>");
  resposta.write("<hr/>");
  resposta.write(`<p>${os.hostname()} | ${os.platform()} | ${os.type()}</p>`);
  resposta.write(`<p><b>Total de cpus:</b> ${os.cpus().length}</p>`);

  resposta.write(`<p>Proprietario: ${cpf.generate()}</p>`);
  // Encerra a comunicação
  resposta.end();
});

// Servidor fica esperando requisições
servidor.listen(porta, host);


// SERVIDOR HTTP
// - Rotas
// - Codificação UTF-8
// - Estrutura mais clean/mais minimalista
// - Mais braçal

// Express.js = Framework para backend