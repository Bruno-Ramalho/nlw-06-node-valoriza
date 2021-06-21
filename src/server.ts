import express, { request, response } from "express";

//@types/express
const app = express();

/**
 * GET    => Buscar uma Informação
 * POST   => Criar/Inserir uma Informação
 * PUT    => Alterar uma Informação
 * DELETE => Remover uma Informação
 * PATCH  => Alterar uma Informação específica
 */

app.get("/test", (request, response) => {
  // request  => Entrando
  // response => Saindo
  return response.send("Olá NLW");
});

app.post("/test-post", (request, response) => {
  return response.send("Olá NLW método POST");
})

//http://localhost:3000
app.listen(3000, () => console.log("Server Rodando."))