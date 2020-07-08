function openNav() {
  const nav = document.getElementById("main-nav");
  const hamburger = document.getElementById("hamburger");

  if (!nav.classList.contains("main-nav-open")) {
    // if main-nav-open class not defined , add both
    nav.classList.add("main-nav-open");
    hamburger.classList.add("hamburger-open");
  } else {
    // if main-nav-open defined , remove both
    nav.classList.remove("main-nav-open");
    hamburger.classList.remove("hamburger-open");
  }
}
