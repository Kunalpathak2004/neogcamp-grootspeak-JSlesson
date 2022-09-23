var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverUrl = "https://api.funtranslations.com/translate/groot.json";

function getTrabslateUrl(text) {
    return serverUrl + "?" + "text= " + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("server is down! try again after sometime");
}



function clickHandler() {
    outputDiv.innerText = "aggjhdamhnsafhg " + txtInput.value;

    var inputText = txtInput.value; //taking input
    //   processing output
    fetch(getTrabslateUrl(inputText))
        .then(res => res.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)