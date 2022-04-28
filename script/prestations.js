let imgContainer = document.querySelectorAll(".imgContainer>img")
let textContainer = document.querySelectorAll(".imgContainer .text")
console.log(textContainer)
imgContainer.forEach((el) => {
    el.addEventListener("mouseenter", (e) => (e.target.style.opacity = 0.5))
})
textContainer.forEach((el) => {
    el.addEventListener("mouseenter", (e) => {
        e.target.parentElement.children[0].style.opacity = 0.5
    })
})
imgContainer.forEach((el) => {
    el.addEventListener("mouseleave", (e) => (e.target.style.opacity = 1))
})
