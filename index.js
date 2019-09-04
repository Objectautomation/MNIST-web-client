const express = require('express');
const app = express();
const fs = require("fs");
const request = require('request');

const bodyParser = require('body-parser');
const multer  = require('multer');
const url = 'https://localhost/powerai-vision/api/dlapis/50ed7054-4b6a-43bb-a8cd-d2e5b7d603ae';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
const upload = multer({dest: 'uploads' });;

app.get('/', function(req, res) {
  res.sendFile('/home/object/oa1/image-upload-js/index.html');
});

// File input field name is simply 'file'
app.post('/upload', upload.single('files'), function(req, res) {
  console.log('Uploaded file: ', req.file);
	const formData = {files: fs.createReadStream(__dirname + '/' + req.file.path)};
  return request.post({
		url, 
		rejectUnauthorized: false,
		formData
	}, function(err, resp, body) {
    console.log(body,err);
    res.send(body);
  });
});

const port = 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

