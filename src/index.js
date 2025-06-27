import "./styles.css";

let body = document.querySelector("body");
let images = document.querySelector(".images");
let navigator = document.querySelector(".navigator");

images.children[0].classList.toggle("active");
let currentImage = 0;
navigator.children[0].classList.toggle("active");

let userInteracted = false;

setInterval(moveImage, 2000);

function moveImage() {
    if(!userInteracted) {
        images.children[currentImage].classList.toggle("active");
        navigator.children[currentImage].classList.toggle("active");
        currentImage == 3 ? currentImage = 0 : currentImage++;
        images.children[currentImage].classList.toggle("active");
        navigator.children[currentImage].classList.toggle("active");
    }
}


body.addEventListener("click", (event) => {
    if(event.target.id == "left") {
        images.children[currentImage].classList.toggle("active");
        navigator.children[currentImage].classList.toggle("active");
        currentImage == 0 ? currentImage = images.children.length - 1 : currentImage--;
        images.children[currentImage].classList.toggle("active");
        navigator.children[currentImage].classList.toggle("active");
        userInteracted = true;
    }

    if(event.target.id == "right") {
        images.children[currentImage].classList.toggle("active");
        navigator.children[currentImage].classList.toggle("active");
        currentImage == 3 ? currentImage = 0 : currentImage++;
        images.children[currentImage].classList.toggle("active");
        navigator.children[currentImage].classList.toggle("active");
        userInteracted = true;
    }

    if(event.target.nodeName == "SPAN") {
        images.children[currentImage].classList.toggle("active");
        navigator.children[currentImage].classList.toggle("active");
        images.children[event.target.id].classList.toggle("active");
        navigator.children[event.target.id].classList.toggle("active");
        currentImage = event.target.id;
        userInteracted = true;
    }
});