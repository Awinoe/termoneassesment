// Term 1 JavaScript Project: Mood Tracker
// Mood Tracker JavaScript

// Read the comments carefully.
// Complete the message text in each event below.

// Select the message element
const message = document.getElementById("message");

// Select the buttons
const happyBtn = document.getElementById("happyBtn");
const sadBtn = document.getElementById("sadBtn");
const excitedBtn = document.getElementById("excitedBtn");
const resetBtn = document.getElementById("resetBtn");


// Happy button event
happyBtn.addEventListener("click", function () {

  // TODO: Change the message to show a happy mood
  message.textContent = "smile it's a great day ";

  // This line changes the background color
  document.body.style.backgroundColor = "#14bdc9";

});

// Sad button event
sadBtn.addEventListener("click", function () {

    // TODO: Change the message to show a sad mood
    message.textContent = "Saddnss can be a silent scream that echoes within suffocation,us with intensity";

    // This line changes the background color
    document.body.style.backgroundColor = "#080808";

});

// Excited button event
excitedBtn.addEventListener("click", function () {

    // TODO: Change the message to show an excited mood
    message.textContent = "when you are exited every moment becomes an opportunity for greatness";

    // This line changes the background color
    document.body.style.backgroundColor = "blue";

});

// Reset button event
resetBtn.addEventListener("click", function () {
    // TODO: Change the message to the default state
    message.textContent = "How are you feeling today?";

    // This line resets the background color
    document.body.style.backgroundColor = "white";
});