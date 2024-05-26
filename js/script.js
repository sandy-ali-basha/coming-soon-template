$(document).ready(function () {
  // When the CONTACTUS class is clicked
  $(".CONTACTUS").click(function () {
    // Fade out the section1 class
    $(".section1").fadeOut(function () {
      // After fading out, fade in the contact class
      $(".contact").fadeIn();
    });
  });

  // When the basics class is clicked
  $(".basics").click(function () {
    // Fade out the contact class
    $(".contact").fadeOut(function () {
      // After fading out, fade in the section1 class
      $(".section1").fadeIn();
    });
  });
});
