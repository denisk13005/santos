let imgContainer = document.querySelectorAll(".imgContainer>img")
imgContainer.forEach((el) => {
    el.addEventListener("mouseenter", (e) => (e.target.style.opacity = 0.5))
})
imgContainer.forEach((el) => {
    el.addEventListener("mouseleave", (e) => (e.target.style.opacity = 1))
})
