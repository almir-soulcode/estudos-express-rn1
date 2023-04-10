const express = require("express");

// Define uma aplicação backend em Express
// Recursos pré-configurados
const app = express();

// Define um roteamento
// Manipulador de rota
app.get("/", (requisicao, resposta) => {
  resposta.send("<h2>Hello, World! É top!</h2>");
});

// Inicializa a escuta de requisições do servidor
app.listen(3000);
