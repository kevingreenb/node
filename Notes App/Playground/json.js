//JSON to string
// var obj = {
// 	name: 'Kevin'
// };
// console.log(typeof obj);
// console.log(obj);
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj

//string to JSON
// var personString = '{"name":"Kevin","age":25}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
	title: "Some title",
	body: "Some body"
};

// originalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);