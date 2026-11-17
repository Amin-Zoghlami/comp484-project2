var pet_info = {
    name: "Buddy",
    weight: 10,
    happiness: 50
  };
  
$(function() {
  
  // Pet information object containing its name, weight, and happiness.
  

  // Initial update of the pet information on the webpage.
  checkAndUpdatePetInfoInHtml();

  // Connect each button to its corresponding function.
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.nap-button').click(clickedNapButton);

  // jQuery Method #1: wrap()
  // The wrap() method places the selected HTML element inside another
  // HTML element. Here, it wraps the pet image in a decorative frame.
  // This allows us to style the image and its frame separately in CSS.
  $('.pet-image').wrap("<div class='pet-frame'></div>");

});


// Treat button: increases happiness and weight.
function clickedTreatButton() {

  pet_info.happiness += 10;
  pet_info.weight += 2;

  checkAndUpdatePetInfoInHtml();

  showPetMessage("Woof! Thank you for the delicious treat!");
}


// Play button: increases happiness and decreases weight.
function clickedPlayButton() {

  pet_info.happiness += 8;
  pet_info.weight -= 1;

  checkAndUpdatePetInfoInHtml();

  showPetMessage("Yay! I love playing with you!");
}


// Exercise button: decreases happiness and weight.
function clickedExerciseButton() {

  pet_info.happiness -= 5;
  pet_info.weight -= 2;

  checkAndUpdatePetInfoInHtml();

  showPetMessage("I'm getting tired! But exercise is good for me!");
}


// New action: Nap button.
// Taking a nap increases happiness and slightly increases weight.
function clickedNapButton() {

  pet_info.happiness += 8;
  pet_info.weight += 1;

  checkAndUpdatePetInfoInHtml();

  showPetMessage("Zzz... That was a wonderful nap!");
}


// Checks the pet's values and updates the webpage.
function checkAndUpdatePetInfoInHtml() {

  checkWeightAndHappinessBeforeUpdating();

  updatePetInfoInHtml();
}


// Makes sure weight and happiness never fall below zero.
function checkWeightAndHappinessBeforeUpdating() {

  if (pet_info.weight < 0) {
    pet_info.weight = 0;
  }

  if (pet_info.happiness < 0) {
    pet_info.happiness = 0;
  }
}


// Updates the HTML with the current pet information.
function updatePetInfoInHtml() {

  $('.name').text(pet_info.name);
  $('.weight').text(pet_info.weight);
  $('.happiness').text(pet_info.happiness);

}


// Displays a notification from the pet after every action.
function showPetMessage(message) {

  // Update the main notification with the pet's comment.
  $('.pet-message').text(message);

  // Add the new message to the notification history.
  var newMessage = $('<li>').text(message);

  $('.message-history').append(newMessage);

  // jQuery Method #2: scrollTop()
  // The scrollTop() method gets or sets the vertical scroll position
  // of an element. Here, we set the scroll position of the notification
  // history to its total scroll height. This automatically scrolls
  // down to show the newest message whenever a notification is added.
  var history = $('.history-container');

  history.scrollTop(history[0].scrollHeight);

}
