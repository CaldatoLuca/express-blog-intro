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

module.exports = {
  readJSON,
  writeJSON,
};
