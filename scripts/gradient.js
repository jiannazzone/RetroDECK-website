let gradientAngle = 45;

let jumbotronElems = document.getElementsByClassName('jumbotron');
const gradientInterval = setInterval(function() {
    updateGradientAngle();
}, 50);
console.log(jumbotronElems.length)

function updateGradientAngle() {
    gradientAngle += 1
    if (gradientAngle > 360) {
        gradientAngle = 0;
    }
    for (let i=0; i<jumbotronElems.length; i++) {
        jumbotronElems[i].style.background = `linear-gradient(${gradientAngle}deg, #1a9fff, #946beb)`;
    }
}