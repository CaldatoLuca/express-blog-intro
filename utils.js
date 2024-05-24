const path = require("path");
const fs = require("fs");

//Lettura Json
const readJSON = (fileName) => {
  const filePath = path.join(__dirname, `${fileName}.json`);
  const json = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(json);
};

//Lettura Html
const readHTML = (fileName) => {
  return fs.readFileSync(
    path.join(__dirname, "views", `${fileName}.html`),
    "utf-8"
  );
};

module.exports = {
  readJSON,
  readHTML,
};
