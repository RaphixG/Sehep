function createBigImg() {
    let here = document.getElementById("big-image")
    let image = document.createElement("img")
    image.src= 'medias/Forest-divinity.gif'
    if(here.querySelector('img')) return
    here.appendChild(image)

    // Style
    image.style.height = "700px"
    image.style.width = "400px"

    // Delete button
    let button = document.getElementById("big")
    button.style.visibility = "hidden"
    button.style.width = 0
    button.style.height = 0
}
