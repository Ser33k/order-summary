/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "../styles/home-page.scss";

const confirmLink = document.querySelector(".card__link-confirm");

confirmLink.addEventListener("click", function () {
  this.innerHTML = `<i class="fa fa-circle-o-notch fa-spin fa-lg" />`;
});
