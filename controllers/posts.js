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
  res.send("<h1>Lista posts</h1> <a href='/'>Torna alla Home</a>");
  console.log(posts[0]);
};

module.exports = {
  home,
  index,
};
