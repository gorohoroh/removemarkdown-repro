const fs = require("fs");
const removeMarkdown = require("remove-markdown");

const readTestData = fileName => fs.readFileSync(fileName, "utf8", (err, data) => data);

const works = removeMarkdown(readTestData("regularInput.md"));
console.log(works)

const neverCompletes = removeMarkdown(readTestData("badInput.md"))
console.log(neverCompletes)
