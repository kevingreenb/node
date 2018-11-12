console.log('App is running!'); 

const fs = require('fs');

fs.appendFile('greetings.txt','Hello World', function (err) {
	if (err) {
		console.log('Unable to write to file');
	}
});