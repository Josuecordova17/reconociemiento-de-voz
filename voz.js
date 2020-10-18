document.getElementById('hablar').addEventListener("click",()=>{
    decir(document.getElementById("txt").value);
});

function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}