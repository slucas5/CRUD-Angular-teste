const express = require("express");
const cors = require("cors");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/cadastrar-post", (req, res) => {
  const { titulo, descricao } = req.body;
  console.log(req.body);
  const id = uuid();

  let posts = [];

  try {
    const postsJson = fs.readFileSync("posts.json");
    posts = JSON.parse(postsJson);
  } catch (error) {
    console.log("Erro ao ler o arquivo posts.json: " + error);
    res.status(500).send("Erro ao ler o arquivo posts.json: " + error);
  }

  posts.push({ titulo, descricao, id });

  try {
    fs.writeFileSync("posts.json", JSON.stringify(posts));
  } catch (error) {
    console.log("Erro ao cadastrar o post: " + error);
    res.status(500).send("Erro ao cadastrar o post: " + error);
  }

  res.status(201).send({ mensagem: "Post cadastrado com sucesso" });
});

app.get("/todos-post", (req, res) => {
  let posts = [];

  try {
    const postsJson = fs.readFileSync("posts.json");
    posts = JSON.parse(postsJson);
  } catch (error) {
    console.log("Erro ao ler o arquivo posts.json: " + error);
    res.status(500).send("Erro ao ler o arquivo posts.json: " + error);
  }

  res.status(201).send(posts);
});

app.put("/editar-post/:id", (req, res) => {
  const { titulo, descricao } = req.body;
  const { id } = req.params;

  let posts = [{ titulo: "", descricao: "" }];

  try {
    const postsJson = fs.readFileSync("posts.json");
    posts = JSON.parse(postsJson);
  } catch (error) {
    console.log("Erro ao ler o arquivo posts.json: " + error);
    res.status(500).send("Erro ao ler o arquivo posts.json: " + error);
  }

  const itemAlterado = posts.findIndex((post) => post.id === id);

  posts[itemAlterado] = { titulo, descricao, id };

  try {
    fs.writeFileSync("posts.json", JSON.stringify(posts));
  } catch (error) {
    console.log("Erro ao alterar o post: " + error);
    res.status(500).send("Erro ao alterar o post: " + error);
  }

  res.status(201).send(posts[itemAlterado]);
});

app.delete("/deletar-post/:id", (req, res) => {
  const { id } = req.params;
  let posts = [{ titulo: "", descricao: "", id: "" }];

  try {
    const postsJson = fs.readFileSync("posts.json");
    posts = JSON.parse(postsJson);
  } catch (error) {
    console.log("Erro ao ler o arquivo posts.json: " + error);
    res.status(500).send("Erro ao ler o arquivo posts.json: " + error);
  }

  const postsComItemDeletado = posts.filter((post) => post.id !== id);

  try {
    fs.writeFileSync("posts.json", JSON.stringify(postsComItemDeletado));
  } catch (error) {
    console.log("Erro ao deletar o posts: " + error);
    res.status(500).send("Erro ao deletar o posts: " + error);
  }

  res.status(201).send(posts);
});

app.listen(8080, () => {
  console.log("Servidor Ativo");
});
