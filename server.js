const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/about-me', (req, res) => {
	res.sendFile(__dirname + '/aboutme.html');
});

app.get('/*', (req, res) => {
	res.send('404 Not Found');
});

app.listen(3022, (err) => {
	if (err) {
		console.log('Oops, couldn\'t start this bitch.');
	} else {
		console.log('Start server on port 3022.');
	}
});