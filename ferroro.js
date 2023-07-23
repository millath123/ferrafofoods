function myFunction() {
  var x = document.getElementById("ttopnav");
  if (x.className === "navitems") {
    x.className += " responsive";
  } else {
    x.className = "navitems";
  }
}
