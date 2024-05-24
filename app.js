require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//visualizzazione file statici - img
app.use(express.static("public"));
//body parser
app.use(express.json());

//Posts Controller
const posts = require("./controllers/posts");

//HOME
app.get("/", posts.home);

//POSTS
app.get("/posts", posts.index);

//AGGIUNTA POST
app.post("/posts", posts.addPost);

app.listen(port, () => {
  console.log(`Server pronto a http://localhost:${port}`);
});
