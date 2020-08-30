const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const ChangeDoc = require('./modules/changedoc')
const CreateDoc = require('./modules/createdoc')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded()); // Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.json()); // Parse JSON bodies (as sent by API clients)
app.use(cors()) 

app.get('/', (request, response) => {
	response.set('Access-Control-Allow-Origin', '*')
	console.log('server starting ...');
	response.send('server starting ...');
})

app.get('/download', (request, response) => {
	response.set('Access-Control-Allow-Origin', '*')
	const file = `${__dirname}/files/example.docx`;
	response.download(file);
	console.log('запрос download');
})

app.post("/", function (request, response) {
	response.set('Access-Control-Allow-Origin', '*');
	request.body.c = "Good Bye";
	response.json(request.body); // отправляем пришедший ответ обратно
});

app.post("/doc", function (request, response) {
	response.set('Access-Control-Allow-Origin', '*')
    if(!request.body) return response.sendStatus(400);
	console.log('create docx');
	let docx = new CreateDoc(request.body);
	console.log(docx);

});

app.post("/form", function (request, response) {
	response.set('Access-Control-Allow-Origin', '*');
	console.log(request.body);
	//response.json(request.body); // отправляем пришедший ответ обратно
	//response.sendFile(__dirname + "/index.html");
	response.send("ok");
});


app.post('/simple', function(request, response){
	response.set('Access-Control-Allow-Origin', '*');
    console.log(request.body);
	response.json(request.body);

});

app.listen(PORT, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${PORT}`)
})


