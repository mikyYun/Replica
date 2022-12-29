function toggleClass() {
  const menuIcon = document.getElementById("menu_icon")
  const isNotActive = menuIcon.className.includes("not-active")
  console.log(isNotActive)
  if (isNotActive) {
    menuIcon.classList.add("active")
    menuIcon.classList.remove("not-active")
  } else {
    menuIcon.classList.add("not-active")
    menuIcon.classList.remove("active")
  }
}