let target;

function toggleClass() {
  const menuContainer = document.getElementById("menu_container");
  
  const menuIcon = document.getElementById("menu_icon")
  const isNotActive = menuIcon.className.includes("not-active")
  if (isNotActive) {
    menuIcon.classList.add("active")
    menuIcon.classList.remove("not-active")
    menuContainer.classList.add("show")
  } else {
    menuIcon.classList.add("not-active")
    menuIcon.classList.remove("active")
    menuContainer.classList.remove("show")
  }

}


const elements = [...document.getElementsByClassName("menu_name")]
elements.forEach(el => {
  el.addEventListener("click", (e) => {
    const hasSibling = e.target.nextElementSibling
    
    if (hasSibling) {
      if (target == hasSibling) {
        target.classList.remove("show")
      } else {

        target && target.classList.remove("show");
        target = hasSibling;
        target.classList.add("show")
      }
    } else return;
  })
})