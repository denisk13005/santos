let vid = document.querySelector(".video__container")
vid.playbackRate = 0.6
const title = document.querySelector(".title")
let viewPortWidth = screen.width
// viewPortWidth > 840
//     ? (title.innerHTML = "Garage Mobile Santos")
//     : (title.innerHTML = "mécanique à domicile")
//changement du titre en mode plein écran
const getViewPortWidth = () => {
    viewPortWidth = screen.width
    viewPortWidth < 840
        ? (title.innerHTML = "Garage <br/> mobile <br/>santos")
        : (title.innerHTML = "Mécanique<br/> à<br/> domicile")
}
getViewPortWidth()
window.addEventListener("resize", getViewPortWidth)
