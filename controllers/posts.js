//Utility
const { readJSON } = require("../utils");

//Posts
const posts = readJSON("postsDb");

//Risposta per la Home
const home = (req, res) => {
  res.send("<h1>Benvenuto nel mio Blog</h1> <a href='/posts'>Vai ai posts</a>");
};

//Risposta alla index dei posts
const index = (req, res) => {
  res.format({
    html: () => {
      res.send(`<h1>Lista dei posts</h1> <a href='/'>Torna alla home</a>`);
    },
    json: () => {
      res.send({ message: posts });
    },
    default: () => {
      res.status(406).send({ message: "Formato non supportato" });
    },
  });
};

module.exports = {
  home,
  index,
};
