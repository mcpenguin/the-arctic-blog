// File to make an export file for notes pdfs, to be used in Notes.js
// run command: npm run make_notes_export

const fs = require('fs');
const classData = require('./courses.json');

var courses = [];
var importStatements = [];

for (let term in classData) {
    for (let course in classData[term]['courses']) {
        courses.push(course);
        importStatements.push(`import ${course} from "./notes/${term}/${course}.pdf";`);
    }
}

const pdfsString = `const pdfs = {${courses.join(",")}};`
const exportString = `export default pdfs;`;

fs.writeFileSync(
    "./src/components/Notes/notes-export-file.js",
    [...importStatements, pdfsString, exportString].join("\n") 
);
