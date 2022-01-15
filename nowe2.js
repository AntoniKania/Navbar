const burger = document.querySelector(".burger")
const navlinks = document.querySelector(".navlinks")
const links = document.querySelector(".navlinks li")

burger.addEventListener("click", () => {
    navlinks.classList.toggle("open")
})