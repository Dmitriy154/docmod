const url = 'https://docmod.herokuapp.com/'
const url2 = 'http://localhost:3000'

function postData() {
	let myData = {a: 1, b: 2, c: "hello"};
	let data = JSON.stringify(myData)	
	
//mode: 'no-cors',
	fetch(url, {
		method: 'POST', 
		body: data,	
		headers: {"Content-Type": "application/json; charset=UTF-8"},
	  })
	  .then(response => response.json())
	  .then(json => console.log(json))
}

function createDocx() {
	let myData = {a: 1, b: 2, c: "Dmitriy Afanasov"};
	let data = JSON.stringify(myData)

	fetch("http://localhost:3000/doc", {
		method: 'POST', body: data,	headers: 
		{"Content-Type": "application/json; charset=UTF-8"} //application/vnd.openxmlformats-officedocument.wordprocessingml.document
	  })
	  .then(response => response.json())
	  .then((json) => {
		  console.log('загружен')	
		})
}

function downloadDocx() {
	//location.href = 'http://localhost:3000/download';
	//fetch("https://docmod.herokuapp.com/download")
	fetch("http://localhost:3000/download")
}

