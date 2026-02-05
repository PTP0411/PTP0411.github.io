function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const f1 = document.getElementById('f1')
const ynwa = document.getElementById('ynwa')

audio1 = new Audio("./assets/max.mp3")
audio2 = new Audio("./assets/liverpool_ynwa.mp3")
f1.addEventListener("click", function(){
    toggleAudio(audio1, audio2);
})

ynwa.addEventListener("click", function(){
    toggleAudio(audio2, audio1);
})

function toggleAudio(current, other) {
    // stop the other audio
    other.pause();
    other.currentTime = 0;

    if (current.paused) {
        current.play();
    } else {
        current.pause();
        current.currentTime = 0; // optional: reset when pausing
    }
}