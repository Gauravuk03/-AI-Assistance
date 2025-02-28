const recognition= new (window.SpeechRecognition || window.
    webkitSpeechRecognition); // help for listning

recognition.lang="en-US"


const btn=document.querySelector("#btn")
console.log(btn);

btn.addEventListener("click",()=>{
    

    // Convert text to Voice
    function speak(text){
        const abc = new SpeechSynthesisUtterance(text) // Convert in Voice
        window.speechSynthesis.speak(abc); 
    }

    function handleCommands(command){
        if(command.includes("open youtube")){
            speak("Opening Youtube....");
        window.open("https://www.youtube.com/","_blank")
        
    }
    else if(command.includes("open facebook")){
        speak("Opening Facebook...");
        window.open("https://www.facebook.com","_blank")
    }
    else if(command.includes("open Instagram")){
        speak("Opening Instagram...");
        window.open("https://www.instagram.com","_blank");
    }
    else if(command.includes("open Whatsapp","_blank")){
        speak("Opening Whatsapp...");
        window.open("https://www.whatsapp.com", "_blank")

    }
    else if(command.includes("open Google ","_blank")){
        speak("Opening Google...");
        window.open("https://www.google.com");
    }
    else if(command.includes("open chat-gpt","_blank")){
        speak("Opening Chat-gpt...");
        window.open("https://www.chatgpt.com");
    }

    else if(command.includes("open codeforces","_blank")){
        speak("Opening Codeforces...");
        window.open("https://www.codeforces.com");
    }
    else{
        speak("Searching on Google...");
        window.open(`https://www.google.com/search?q=${command}`, "_blank");

    }
 }

 speak("Hello Sir I am Agent Rockey ,how can I help you")

 setTimeout(()=>{
    btn.innerHTML="Listening...";
    btn.style.backgroundColor = "red"
    recognition.start()
 },3000);

 recognition.onresult=(event)=>{
    const command=event.results[0][0].transcript.toLowerCase();
    handleCommands(command);
 }
 recognition.onend = ()=>{
    btn.innerHTML = "Start Listening...";
    btn.style.backgroundColor = "red";
 }
});