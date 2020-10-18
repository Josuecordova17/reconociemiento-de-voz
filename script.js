document.getElementById('ini').addEventListener('click',record())
function record() {let rec;
    if (!("webkitSpeechRecognition" in window)) {
    	alert("disculpas, no puedes usar la API");
    } else {
    	rec = new webkitSpeechRecognition();
    	rec.lang = "es-HN";
    	rec.continuous = false;
    	rec.interim = true;
    	rec.addEventListener("result",iniciar);
    }
function iniciar(event){
	for (let i = event.resultIndex; i < event.results.length; i++){
        txt=document.getElementById('txt')
        txt.value = event.results[i][0].transcript;
	}
}


rec.start();
    
}
