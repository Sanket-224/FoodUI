try {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
  }
  catch(e) {
    console.error(e);
    $('.no-browser-support').show();
    $('.app').hide();
  }
  
  
  var noteTextarea = $('#note-textarea');
  
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
    console.log(transcript);
    var str = transcript;
    var prefix_proceed_buy = "proceed to buy";
  
    if(str.indexOf(prefix_proceed_buy) > -1) {
        console.log("Proceeding to last page!!");
        window.location = "http://localhost:3000/last"
    }
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
  
  
  
  /*-----------------------------
        App buttons and input 
  ------------------------------*/
  $(document).ready(function() {
    $('#micBtn').on('click', function(e) {
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
  
  
  