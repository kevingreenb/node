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
		console.log('Note added successfully =');
	else 
		console.log('Title already exists');
} 

else if (command === 'list') {
	notes.getAll();
}
else if (command ==='read'){
	notes.getNote(argv.title);
}

else if (command ==='remove'){
	notes.removeNote(argv.title);
}
else {
	console.log('Command note recognized');
}

