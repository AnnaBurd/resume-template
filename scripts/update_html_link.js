import fs from "fs";

console.log("Getting template...");
const template = fs.readFileSync("./docs/template.html", "utf8");

console.log("Getting links data...");
const en = JSON.parse(fs.readFileSync("./docs/en.json", "utf8"));
const ru = JSON.parse(fs.readFileSync("./docs/ru.json", "utf8"));

console.log("Updating template...");

const updatedTemplate = template
  .replace(/{{LINK_RU}}/g, ru.urlFriendlyTargetName)
  .replace(/{{LINK_EN}}/g, en.urlFriendlyTargetName);

console.log("Writing updated template...");

fs.writeFileSync("./docs/index.html", updatedTemplate, "utf8");
