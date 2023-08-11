
// go home function
function goHome() {
  // Show the home elements
  $('nav button, nav a').addClass("animate__fadeInRight");
  $('nav button, nav a').show();
  $('#0').hide();

  // Hide the content
  $('#content').hide();
  $('#content').removeClass("animate__fadeOutRight");
}

function about() {
  // Show BACK and about
  $('#1').show();
  $('#1').addClass("animate__fadeInLeft");
  $('#1').removeClass("btn");
  $('#0').show();
  $('#0').addClass("animate__fadeInLeft");

  // Replace the content for About me
  $('#content').text("I am a computer Science Student in the University of Leeds. My goal is to work in the field of Cybersecurity. On the side I like to cook and program little projects.");
  $('#content').show();
  $('#content').addClass("animate__fadeInRight");
}

// Handle this
function goto(id) {
  switch(id) {
    case "0": // home
      goHome();
      break;
    case "1": // About Me
      about();
      break;
    case "2": // Blog
      break;
    case "3": // Recipes
      break;
    case "4": // Projects
      break;
    case "5": // Curriculum Vitae
      break;
  }
}



$('nav button, nav a').on("click", function (event) {
  // Remove delays for animations
  $('nav button, nav a').removeClass("animate__delay-2s");

  // Animate exits
  $('nav button, nav a').addClass("animate__fadeOutRight");
  $('#content').addClass("animate__fadeOutRight");

  // add btn class
  $('nav button, nav a').addClass("btn");

  //  Hide the buttons and goto selected element
  setTimeout(function () {
    $('nav button, nav a').hide();
    $('#content').hide();
    $('#content').removeClass("animate__fadeOutRight");
    $('nav button, nav a').removeClass("animate__fadeOutRight");
    goto(event.target.id);
  }, 1000)
});
