console.log("Starting Nodes.js");

const fs = require("fs");

var fetchNotes = () => {
	try {
		var notesString = fs.readFileSync("notes-data.json");
		return JSON.parse(notesString); //Converts to object
	} catch (e) {
		return [];
	}	
};

var saveNotes = (notes) => {
	fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};
	//Filter for duplicates
	var duplicateNotes = notes.filter((note) => note.title === title);

	//Check for duplicates before doing this
	if (duplicateNotes.length === 0){
	notes.push(note); //Pushes new note into array of existing objects
	saveNotes(notes);
	return note;
	}
};

var getAll = () => {
	console.log("Getting all notes");
};

var getNote = title => {
	console.log("Getting", title);
};

var removeNote = title => {
	console.log("Removing", title);
};

module.exports = {
	addNote, // same as addNote: addNote ES6
	getAll,
	getNote,
	removeNote
};
