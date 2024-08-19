import fs from "fs";
import PDFParser from "pdf2json";

function addSpacesBetweenUppercase(input) {
  return input
    .replace(/([A-Z])/g, " $1")
    .replace(/([А-Я])/g, " $1")
    .trim();
}

function isLatin(string) {
  const hasCyrillic = /[А-Яа-яёЁ]/.test(string);

  return !hasCyrillic;
}

function copyFile(sourceFileName, targetFileName) {
  fs.copyFile(sourceFileName, targetFileName, (err) => {
    if (err) throw err;
    console.log("\n File was copied to", targetFileName);
  });
}

// Capture command-line arguments
const args = process.argv.slice(2);
const filename = args
  .find((arg) => arg.startsWith("--inputFilename="))
  .split("=")[1];

console.log("Filename:", filename);
console.log("Reading file...");

const pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", (errData) =>
  console.error(errData.parserError)
);
pdfParser.on("pdfParser_dataReady", (pdfData) => {
  const t1 = decodeURIComponent(pdfData.Pages[0].Texts.at(0).R[0].T);
  const t2 = decodeURIComponent(pdfData.Pages[0].Texts.at(1).R[0].T);
  const t3 = decodeURIComponent(pdfData.Pages[0].Texts.at(2).R[0].T);

  const name = addSpacesBetweenUppercase(t1);

  const position = (t2 + " " + t3)
    .replace(/[^a-zA-Zа-яА-ЯёЁ\s-]|[\s]{2,}/g, "")
    .trim();

  const language = isLatin(name) ? "en" : "ru";

  console.log(`Name: ${name}`);
  console.log(`Position: ${position}.`);
  console.log(`Language: ${language}`);

  const targetFilename =
    language === "ru"
      ? `Резюме ${position} - ${name}.pdf`
      : `Resume ${position} - ${name}.pdf`;

  const urlFriendlyTargetName = targetFilename.replace(/ /g, "_");

  copyFile(filename, `./docs/${urlFriendlyTargetName}`);

  fs.writeFileSync(
    `./docs/${language}.json`,
    JSON.stringify({ urlFriendlyTargetName }, null, 2)
  );
});

pdfParser.loadPDF(filename);
