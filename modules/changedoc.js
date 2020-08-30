const generateDocx = require('generate-docx')
const fs = require('fs')

module.exports = ChangeDoc;
	
function ChangeDoc(data){
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
	 
	generateDocx(options)
	  .then(console.log)
	  .catch(console.error)
}
	
	
	