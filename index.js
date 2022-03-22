var speechClass = document.querySelector(".speech")
var word = ""
var partOfSpeech = ""
var definitions = ""
var audio = ""
var request = new XMLHttpRequest()

request.open("GET", "https://api.dictionaryapi.dev/api/v2/entries/en/hello")

request.onload = function () {
    var response = request.response;
    var parsedData = JSON.parse(response);

    word = parsedData[0].word;
    for (let i = 0; i < parsedData[0].meanings.length; i++) {
        partOfSpeech = parsedData[0].meanings[i].partOfSpeech;
        definitions = parsedData[0].meanings[i].definitions[0].definition
        audio = parsedData[0].phonetics[1].audio
        speechClass.innerHTML = `<audio controls>
                                    <source src="${audio}" type="audio/mp3">
                                </audio>`
        alert(parsedData)
    }

}

request.send();
// use this to display audio
//`<audio controls><source src="${audio}" type="audio/mp3"></audio>`
//create an object with the definitions you have gotten and alert it to the page
