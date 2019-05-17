
try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}


var noteTextarea = $('#twotabsearchtextbox');

var noteContent = '';


/*-----------------------------
      Voice Recognition
------------------------------*/

// If false, the recording will stop after a few seconds of silence.
// When true, the silence period is longer (about 15 seconds),
// allowing us to keep recording even when the user pauses.
recognition.continuous = false;

// This block is called every time the Speech APi captures a line.
recognition.onresult = function(event) {

  // event is a SpeechRecognitionEvent object.
  // It holds all the lines we have captured so far.
  // We only need the current one.
  var current = event.resultIndex;

  // Get a transcript of what was said.
  var transcript = event.results[current][0].transcript;
  noteContent = transcript;
//  noteTextarea.val(noteContent);
//  console.log(noteTextarea.val());
//  var str = noteTextarea.val();
//  console.log(typeof str);
  var prefix = "I want to prepare";
  var recipe = transcript.substring(transcript.indexOf(prefix)+ prefix.length, transcript.length).trim();
  console.log(recipe);
  document.getElementById("twotabsearchtextbox").value = recipe;
//  localStorage.setItem("food", recipe);
  window.location = "http://localhost:3000/second-page?food="+recipe;
};

recognition.onstart = function() {
  noteTextarea.val("");
}

recognition.onspeechend = function() {
  console.log("Speech ended");
}

recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
  };
}

console.log("hello");

/*-----------------------------
      App buttons and input
------------------------------*/
$(document).ready(function() {

    $('#microButton').on('click', function(e) {
      if (noteContent.length) {
        noteContent += ' ';
      }
      recognition.start();
    });
})

// Sync the text inside the text area with the noteContent variable.
noteTextarea.on('input', function() {
  noteContent = $(this).val();
})

