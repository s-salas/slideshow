document.addEventListener('DOMContentLoaded', function() {
const startButton = document.querySelector('.start-btn');
const arrowButton = document.querySelector('.controls-arrow');


startButton.addEventListener('click', startPresentation);

function startPresentation(e) {
    let zoneSize = 110;
    let x = e.clientX;  // get mouse X position
    let y = e.clientY;  // get mouse Y position
    let wx = window.innerWidth;  // get window width
    let hy = window.innerHeight; // get window height
    if (x>(wx-zoneSize) && y>(hy-zoneSize)) {
    } else {
        // only if not in normal controls zone
        e.preventDefault();
        if(e.button === 0) Reveal.next();
        if(e.button === 2) Reveal.prev();
    }
}

// Get the modal
const julianModal = document.getElementById("julianModal");
const motleyModal = document.getElementById("motleyModal");
const squeaksModal = document.getElementById("squeaksModal");
const margieModal = document.getElementById("margieModal");
const julianMargieModal = document.getElementById("julianMargieModal");
const denverModal = document.getElementById("denverModal");

// Get the image that opens the modal
const julianImg = document.getElementById("julian");
const motleyImg = document.getElementById("motley");
const squeaksImg = document.getElementById("squeaks");
const margieImg = document.getElementById("margie");
const julianMargieImg = document.getElementById("julian-margie");
const denverImg = document.getElementById("denver");


// Get the <span> element that closes the modal
const julianClose = document.querySelector("#julianModal .close");
const motleyClose = document.querySelector("#motleyModal .close");
const squeaksClose = document.querySelector("#squeaksModal .close");
const margieClose = document.querySelector("#margieModal .close");
const julianMargieClose = document.querySelector("#julianMargieModal .close");
const denverClose = document.querySelector("#denverModal .close");


// When the user clicks the image, open the modal
julianImg.onclick = function() {
    julianModal.style.display = "block";
}

motleyImg.onclick = function() {
    motleyModal.style.display = "block";
}

squeaksImg.onclick = function() {
    squeaksModal.style.display = "block";
}

margieImg.onclick = function() {
    margieModal.style.display = "block";
}

julianMargieImg.onclick = function() {
    julianMargieModal.style.display = "block";
}

denverImg.onclick = function() {
    denverModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
julianClose.onclick = function() {
    julianModal.style.display = "none";
}

motleyClose.onclick = function() {
    motleyModal.style.display = "none";
}

squeaksClose.onclick = function() {
    squeaksModal.style.display = "none";
}

margieClose.onclick = function() {
    margieModal.style.display = "none";
}

julianMargieClose.onclick = function() {
    julianMargieModal.style.display = "none";
}

denverClose.onclick = function() {
    denverModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == julianModal) {
        julianModal.style.display = "none";
    }
    if (event.target == motleyModal) {
        motleyModal.style.display = "none";
    }
    if (event.target == squeaksModal) {
        squeaksModal.style.display = "none";
    }
    if (event.target == margieModal) {
        margieModal.style.display = "none";
    }
    if (event.target == julianMargieModal) {
        julianMargieModal.style.display = "none";
    }
    if (event.target == denverModal) {
        denverModal.style.display = "none";
    }
}
});