// Wait for the document to load completely
$(document).ready(function () {
  // When the CONTACTUS class is clicked
  $(".CONTACTUS").click(function () {
    // Fade out the section1 class
    $(".section1").fadeOut();
    // After a delay of 1000ms, fade in the contact class
    $(".contact").delay(1000).fadeIn();
  });

  // When the basics class is clicked
  $(".basics").click(function () {
    // Fade out the contact class
    $(".contact").fadeOut();
    // After a delay of 1000ms, fade in the section1 class
    $(".section1").delay(1000).fadeIn();
  });
});

// Set the countdown date and time
var now = '2024/4/20 12:34:56'
var last = "00:00:00:00"

// Start the countdown
$('#clock').countdown(now, function (event) {
  var format = '%H%M%S';
  // If there are total days left
  if (event.offset.totalDays > 0) {
    // If total days are more than 10
    if (event.offset.totalDays > 10) {
      format = '%-d' + format;
    } else {
      format = '0%-d' + format;
    }
  }
  // Format the time
  var now = event.strftime(format);
  // Animate the time
  animateTime(last, now);
  // Log the time
  console.log(last + "            " + now)
  // Set the last time to now
  last = now;
})

// Function to animate the time
function animateTime(last, now) {
  // Loop through each character of the time
  for (var i = 0; i < now.length; i++) {
    // If the character has changed
    if (last[i] != now[i]) {
      // Animate the change
      animate(i, now[i]);
    }
  }
}

// Function to animate a change
function animate(index, number) {
  // Get the element with the class number at the given index
  var element = document.getElementsByClassName("number")[index]
  // Clone the last child of the element
  var second = element.lastElementChild.cloneNode(true);
  // Set the innerHTML of the clone to the new number
  second.innerHTML = number;
  // Append the clone to the element
  element.appendChild(second);
  // Add the move class to the element
  element.classList.add('move');
  // After 500ms, remove the move class from the element
  setTimeout(function () {
    element.classList.remove('move');
  }, 500)
  // After 500ms, remove the first child of the element
  setTimeout(function () {
    element.removeChild(element.firstElementChild);
  }, 500)
}
