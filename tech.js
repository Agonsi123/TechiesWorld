// javascript forntoggle Menu 
window.onresize = function () {
  if (window.innerWidth > 700) {
    document.getElementById("mobileNav").style.display = "none";
    document.getElementById("bars").style.display = "none";
  } else {
    document.getElementById("bars").style.display = "inline";
  }
};
var navLinks = document.getElementById("navLinks");
function showMenu() {
  // navLinks.style.right = "0";
  document.getElementById("bars").style.display = "none";
  document.getElementById("mobileNav").style.display = "inline";
}
function hideMenu() {
  // navLinks.style.right = "-200px"
  document.getElementById("mobileNav").style.display = "none";
  document.getElementById("bars").style.display = "inline";
}
//Script for form submission
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};