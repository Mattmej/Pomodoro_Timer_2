/* 

Game Plan:

Settings section
    * Settings will be a form.
    * Explanation of timing system will be displayed at the top of settings form.

Timer section
    * Timer will be displayed at top of screen, settings at bottom of screen.
    * Clicking the "pause" buttons on the screen will change the button to "resume."
    * Clicking "resume" will change the button to "pause."
    * Number of "counted breaks" will be displayed above the timer.


*/

$("#change-settings").on("click", function() {
    window.location.href = "settings.html";
});


$("#set-button").on("click", setPomodoro); 


$('#button-holder').on('click', '#play-pause-button', function() {

  alert("Started!");
  console.log("id changed!");
})

function setPomodoro() {

  var date = new Date(null);
  date.setSeconds(10);
  var timeString = date.toISOString();
  var timeStringShort = date.toISOString().substr(14, 5);
  console.log(timeString);
  console.log(timeStringShort);


  $("#time").html(timeStringShort);
  $('#set-button').html('Start');
  $('#set-button').off('click').on('click', createPlayButton);

};

function createPlayButton() {
  // $('#set-button').removeClass('set-timer-button');
  // $('#set-button').addClass('start-button');
  alert("Start button pressed!");
}


// $(".timerSettings").validate();

// $( "#timerSettings" ).validate({
//     // submitHandler: function(form) {
//     //     form.submit();
//     // },
//     rules: {
//       field: {
//         required: true,
//         digits: true
//       }
//     }
//   });