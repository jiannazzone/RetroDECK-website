let gradientAngle = 45;

let gradientSpinElems = document.getElementsByClassName('gradient-spin');
const gradientInterval = setInterval(function() {
    updateGradientAngle();
}, 50);

function updateGradientAngle() {
    gradientAngle += 1
    if (gradientAngle > 360) {
        gradientAngle = 0;
    }
    for (let i=0; i<gradientSpinElems.length; i++) {
        gradientSpinElems[i].style.background = `linear-gradient(${gradientAngle}deg, #1a9fff, #946beb)`;
    }
}