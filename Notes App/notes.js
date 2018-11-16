console.log("Starting Nodes.js");

const fs = require("fs");

//gets existing notes as an object
var fetchNotes = () => {
	try {
		var notesString = fs.readFileSync("notes-data.json");//reads only if exists
		return JSON.parse(notesString); //Converts to object
	} catch (e) {
		return [];
	}	
};

//saves note to file
var saveNotes = (notes) => {
	fs.writeFileSync("notes-data.json", JSON.stringify(notes));//writes to file
};

var addNote = (title, body) => {
	var notes = fetchNotes();//gets existing notes
	var note = {
		title,
		body
	};
	//Filter for duplicates
	var duplicateNotes = notes.filter((note) => note.title === title);

	//Check for duplicates before doing this
	if (duplicateNotes.length === 0){
	notes.push(note); //Pushes new note into array of existing objects
	saveNotes(notes);//saves array into file
	return note;
	}
};

var getAll = () => {
	console.log("Getting all notes");
};

var getNote = title => {
	// return 1 note, the note passed in title, as an array
	var notes = fetchNotes();
	var note = notes.filter((note) => note.title === title);
	return note[0];
};

var removeNote = title => {
	var notes = fetchNotes();
	var filterNotes = notes.filter((note) => note.title !== title);//It returns all the items that do not equals title
	saveNotes(filterNotes);

	return notes.length !== filterNotes.length
};

var logNote = (note) => {
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
	
};

module.exports = {
	addNote, // same as addNote: addNote ES6
	getAll,
	getNote,
	removeNote,
	logNote
};
