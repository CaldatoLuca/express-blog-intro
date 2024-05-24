//Utility
const { readJSON, readHTML } = require("../utils");

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
      //Leggo file HTML
      const postsHTML = readHTML("posts");

      //creo i li HTML, join lo rende una stringa(quindi leggibile html), altrimenti è un array di tanti `<li>${post.titolo}</li>`
      const postsListHTML = posts
        .map((post) => `<li>${post.titolo}</li>`)
        .join("");

      //replace serve a sostituire il 'segnaposto'(vedi html) con la variabile 'postsListHTML'
      const postsPageHTML = postsHTML.replace("{{postsList}}", postsListHTML);

      //la risposta è html al 100%
      res.send(postsPageHTML);
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
