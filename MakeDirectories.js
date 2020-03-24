const fs = require("fs");

const folderNames = [
"1-Clean-Code-with-JavaScript",
"2-Clean-Code-with-Functional-Programming",
"3-Modules-in-JavaScript",
"4-Design-Patterns-and-Principles",
"5-Testing",
"6-Error-Handling"
];

try {
  folderNames.forEach(
    name => fs.mkdir(name, () => console.log(name))
  );
} catch (error) {
  console.log(error);
}
