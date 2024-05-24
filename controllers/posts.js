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
  //varia in base a Accept nell' headers della richiesta
  res.format({
    //RISPOSTA HTML
    html: () => {
      //Leggo file HTML
      const postsHTML = readHTML("posts");

      //creo i li HTML, join lo rende una stringa(quindi leggibile html), altrimenti è un array di tanti `<li>${post.titolo}</li>`
      const postsListHTML = posts
        .map(
          (post) =>
            `<li>
            ${post.titolo} <br/>
            ${post.contenuto} <br/>
            ${post.tags.map((tag) => `<span>${tag}</span>`).join(" - ")} <br/>
          </li> <br/>`
        )
        .join("");

      //replace serve a sostituire il 'segnaposto'(vedi html) con la variabile 'postsListHTML'
      const postsPageHTML = postsHTML.replace("{{postsList}}", postsListHTML);

      //la risposta è html al 100%
      res.send(postsPageHTML);
    },

    //RISPOSTA JSON
    json: () => {
      res.send({ message: posts });
    },

    //Se non gestisco la richiesta metto status 406 e mando messaggio di avviso
    //406 - la richiesta del client è stata capita ma il server non puo adempiere alla richiesta (format Accept non gestito)
    default: () => {
      res.status(406).send({ message: "Formato non supportato" });
    },
  });
};

module.exports = {
  home,
  index,
};
