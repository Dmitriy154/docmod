const generateDocx = require('generate-docx')
const express = require('express')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000
const app = express()

// parse application/json
//app.use(bodyParser.json())

app.get("/", function(request, response){
    response.send("<h2>Привет Express!</h2>");
});


app.post('/', function(request, response){
	
	console.log(request.body);      // your JSON
	//response.send('text');    // echo the result back
});


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})



//DOCX
const options = {
  template: {
    filePath: 'template/testdoc.docx',
    data: {
      title: 'This is the title',
      description: 'Description is good',
      body: 'My body is my temple',
	  x: '10',
	  rez: '2.5'
    }
  },
  save: {
    filePath: 'docx/savedfile.docx'
  }
}
 
/*
generateDocx(options)
  .then(console.log)
  .catch(console.error)
*/
// _DOCX