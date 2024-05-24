const path = require("path");
const fs = require("fs");

const readJSON = (fileName) => {
  const filePath = path.join(__dirname, `${fileName}.json`);
  const json = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(json);
};

const writeJSON = (fileName, data) => {
  const filePath = path.join(__dirname, `${fileName}.json`);
  const json = JSON.stringify(data);
  fs.writeFileSync(filePath, json);
};

const readHTML = (fileName) => {
  return fs.readFileSync(
    path.join(__dirname, "views", `${fileName}.html`),
    "utf-8"
  );
};

module.exports = {
  readJSON,
  writeJSON,
  readHTML,
};
