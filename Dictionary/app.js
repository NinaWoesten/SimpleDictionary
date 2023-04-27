//searchinput & searchbtn

const dictionary = (word) =>{
   
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'e59d601a14mshf560b5241cdfdb8p1687aejsn99b713e10ce5',
		'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
	}
};
fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
    .then(result => result.json())
    .then((result) => {
        console.log(result);
        words.innerHTML = result.word;
        definition.innerHTML = result.definition;
    })
    .catch (error) 
	console.error(error);
}

submitbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    dictionary(searchinput.value)
})
