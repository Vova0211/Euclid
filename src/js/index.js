import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs"
function burger() {
  const header = document.querySelector(".header");
  const burgerBtn = document.querySelector(".burger-btn");
  burgerBtn.addEventListener('click', e => {
    const burgerTemplate = document.getElementById("burger").content.cloneNode(true);
    burgerBtn.classList.toggle("opened");
    if ([...burgerBtn.classList].includes("opened")) {
      header.appendChild(burgerTemplate);
    } else {
      document.querySelector(".burger").remove();
    }
  })
}
burger()
const swiper = new Swiper('.swiper', {
  direction: "horizontal",
  loop: true,
})
