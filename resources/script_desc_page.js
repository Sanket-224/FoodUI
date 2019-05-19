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
  var prefix_add_individual = "add only";
  var prefix_add_all = "add all items";
  var prefix_done = "proceed to cart";

  // if(str.indexOf(prefix_add_individual) > -1) {
  //      var item = str.substring(str.indexOf(prefix_add_individual)+ prefix_add_individual.length, str.length);
  //      console.log(item);
  //      // call add ingredients with one item
  // }

  if(str.indexOf(prefix_add_all) > -1) {
       console.log("Adding all items");
       var recipe = document.getElementById("recipeName").innerHTML;
        $.ajax({
            url: "http://localhost:3000/alexa/"+recipe,
            method: "GET",
            headers: { "Content-Type": "application/json" },
            success: function (response) {
              console.log("Alexa call success!!");
              document.getElementById("nav-cart-count").innerHTML = document.getElementById("allItemCount").innerHTML;
              alert("Amazon.in : All items added to cart!");
            },
            error: function (error) {
              console.log("FAILEDD!!!")
            }
          })
  }

   if(str.indexOf(prefix_done) > -1) {
       console.log("displaying cart");
       window.location = "http://localhost:3000/third"
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
  $('#startRecordBtn').on('click', function(e) {
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


