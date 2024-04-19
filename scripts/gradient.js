let gradientSpinElems = document.getElementsByClassName('gradient-spin');
let gradientAngles = Array.from({ length: gradientSpinElems.length }, () => Math.floor(Math.random() * 361) + 1);
let gradientInterval;

reduceMotion();

function updateGradientAngle() {
    for (let i = 0; i < gradientSpinElems.length; i++) {
        gradientAngles[i] += Math.floor(Math.random() * 5) - 5;
        gradientSpinElems[i].style.background = `linear-gradient(${gradientAngles[i]}deg, #1a9fff, 15%, #946beb)`;
    }
}

function reduceMotion() {
    let reduceMotionState = document.getElementById('reduce-motion-switch').checked;
    if (reduceMotionState) {
        clearInterval(gradientInterval);
        // document.getElementById('screenshotCarousel').classList.remove('ride');
    } else {
        // document.getElementById('screenshotCarousel').classList.add('ride');
        gradientInterval = setInterval(function () {
            updateGradientAngle();
        }, 100);
    }
}