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

