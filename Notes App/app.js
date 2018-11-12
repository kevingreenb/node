console.log('App is running!'); 

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

//To access arguments from CMD
var command = process.argv[2];

if (command === 'add') {
	console.log('Adding new note');
} 

else if (command === 'list') {
	console.log('Listing all notes');
}
else if (command ==='read'){
	console.log('Fetching the note');
}

else if (command ==='remove'){
	console.log('Removing the note')
}
else {
	console.log('Command note recognized');
}

