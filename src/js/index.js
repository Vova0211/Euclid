function heroSwipe() {
  const hero = document.querySelector(".hero__track");
  let startX;
  function heroMove(e) {
    const mX = e.clientX / window.innerWidth * 360
    hero.style = `transform: translateX(${mX - startX}px);`
  }
  hero.addEventListener("mousedown", eD => {
    startX = getMouseX(eD);
    hero.addEventListener("mousemove", heroMove);
    hero.removeEventListener("mouseup", heroMove);
    hero.addEventListener()
  })
}
function getMouseX(e){
  return e.clientX / window.innerWidth * 360;
}

// heroSwipe()