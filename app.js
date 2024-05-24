require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//visualizzazione file statici - img
app.use(express.static("public"));

//Posts Controller
const posts = require("./controllers/posts");

//HOME
app.get("/", posts.home);

//POSTS
app.get("/posts", posts.index);

app.listen(port, () => {
  console.log(`Server pronto a http://localhost:${port}`);
});
