console.log('App is running!'); 

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')

var user = os.userInfo();

var res = notes.addNote();
var res2 = notes.add(1,6);
console.log(res2);

// fs.appendFile('greetings.txt',`Hello ${user.username}! You are  ${notes.age}`, function (err) {
// 	if (err) {
// 		console.log('Unable to write to file');
// 	}
// });
