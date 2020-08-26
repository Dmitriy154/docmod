const generateDocx = require('generate-docx')
 
const options = {
  template: {
    filePath: 'template/testdoc.docx',
    data: {
      title: 'This is the title',
      description: 'Description is good',
      body: 'My body is my temple'
    }
  },
  save: {
    filePath: 'docx/savedfile.docx'
  }
}
 
generateDocx(options)
  .then(console.log)
  .catch(console.error)