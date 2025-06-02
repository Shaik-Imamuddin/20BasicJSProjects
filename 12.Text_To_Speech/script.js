function Speak() { 
    const synth = window.speechSynthesis;
    const textarea = document.getElementById('area').value.trim(); 

    if (textarea) { 
        const obj = new SpeechSynthesisUtterance(textarea); 
        synth.speak(obj); 
    }
}