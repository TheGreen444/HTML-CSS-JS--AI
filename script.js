

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


// Function to filter out special characters
function filterSpecialCharacters(inputString) {
    const specialCharacters = /[.,/;_=*^&%$#@!]/g;
    return inputString.replace(specialCharacters, '');
}


recognition.onstart = function () {
  console.log("Voice recognition started...");
};

recognition.onresult = function (event) {
  let current = event.resultIndex; 
  let transcript = event.results[current][0].transcript;
  transcript = transcript.toLowerCase();
  transcript = filterSpecialCharacters(transcript);
   console.log(transcript);

  if (transcript.includes("who am i?")) {
    readOut("you are, the green , welcome and how can i help you sir?");
    console.log("welcome, the green hacker");
  }

  if (transcript.includes("hello")) {
    readOut("hello sir, how can i help you?");
    console.log("hello sir, how can i help you?");
  }

  if (transcript.includes("open youtube") || transcript.includes("open www.youtube.com")) {
    readOut("opening youtube, sir");
    console.log("opening youtube, sir");
    window.open("https://www.youtube.com/");
  }

  if (transcript.includes("open my channel")) {
    readOut("opening your youtube channel, sir");
    console.log("opening your youtube channel, sir");
    window.open("https://www.youtube.com/channel/UCBGWApbMKHnpuTobc9C8Xhw");
  }

  if (transcript.includes("open google") || transcript.includes("open www.google.com")) {
    readOut("opening google, sir");
    console.log("opening google, sir");
    window.open("https://www.google.com/");
  }

  if (transcript.includes("friday") ||
     transcript.includes("friday open") ||
      transcript.includes("friday search")) {

    readOut("searching, here are the results");
    console.log("searching, here are the results");
    let input = transcript.split("");
    input.splice(0, 11);
    input.pop();
    input = input.join("").split(" ").join("+");
    console.log(input);
    window.open(`https://www.google.com/search?q=${input}`);
  }


  
  if (transcript.includes("type")) {

    readOut("typing,entering text, here are the results");
    console.log("typing, here are the results");
    let input = transcript.split("");
    input.splice(0, 11);
    input.pop();
    input = input.join("").split(" ").join("+");
    console.log(input);
    window.open(`https://www.youtube.com/results?search_query=${input}`);
  }


  
if (transcript.includes("open google maps") || transcript.includes("open maps")) {
  readOut("opening google maps, sir");
  window.open("https://www.google.com/maps");
}


  if (transcript.includes("good girl") || transcript.includes("good girl")) {
    readOut("THANKYOU, sir  ,by the way i am not a girl , I thing my this time user is gay");
  }

  
};



// play pause function for video

 // up this is for test


// auto jarvis
function autoJarvis() {
  setTimeout(() => {
    recognition.start();
  }, 1000);
}



recognition.onend = function () {
  console.log("Voice recognition stopped.");
};


window.addEventListener('load', (event) => {
  setTimeout(function(){
    startBtn.click();
  }, 2000);
});



startBtn.addEventListener("click", () => {
  recognition.start();
  // readOut("listening");
});
recognition.continuous = true;

stopBtn.addEventListener("click", () => {
  isListening = false;
  recognition.stop();
});

function readOut(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = message;
  speech.lang = "en-US";
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
  console.log("speaking out");
}



