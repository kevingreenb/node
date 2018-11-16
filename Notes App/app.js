console.log('App is running!'); 

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
//Get command arguments from CMD
var command = argv._[0]


if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note)
		notes.logNote(note);
	else 
		console.log('Title already exists');
} 

else if (command === 'list') {
	notes.getAll();
}
else if (command ==='read'){
	// Return note or note not found
	var note = notes.getNote(argv.title);
	if (note)
		notes.logNote(note);
	else 
		console.log('Note not found.');

}

else if (command ==='remove'){
	var wasNoteRemoved = notes.removeNote(argv.title);
	var message = wasNoteRemoved ? 'Note was removed' : 'Noted was not found'
	console.log(message);
}
else {
	console.log('Command note recognized');
}

