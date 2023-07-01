

// TODO: handle this
function goto(id) {
  switch(id) {
    case "0": // home
      break;
    case "1": // About Me
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


$('nav button').on("click", function (event) {
  $('nav button').removeClass("animate__delay-2s");
  $('nav button').addClass("animate__fadeOutRight");

  // TODO: Hide the buttons
  // $('nav button').hide();
  goto(event.target.id);
});
