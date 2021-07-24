var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var confidence,transcript;

function start() {
    document.getElementById("result").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    confidence = event.results[0][0].confidence;
    transcript = event.results[0][0].transcript;
    console.log("Confidence -- "+confidence);
    console.log("You Spoke -- "+transcript);
    document.getElementById("result").innerHTML = transcript;
};
