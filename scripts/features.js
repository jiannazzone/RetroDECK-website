const featureContainerElems = document.getElementsByClassName('feature-container');
let currentFeature = 1

for (let i = 0; i < featureContainerElems.length; i++) {
    featureContainerElems[i].addEventListener('click', function() {
        if (i != currentFeature) {
            updateActiveFeature(i);
        }
    })
}

document.addEventListener('keyup', keyControl);

function keyControl(e) {
    if (e.code == 'ArrowRight') {
        if (currentFeature < featureContainerElems.length-2) {
            updateActiveFeature(currentFeature + 1);
        } else {
            updateActiveFeature(1);
        }
    }
    if (e.code == 'ArrowLeft') {
        if (currentFeature > 1) {
            updateActiveFeature(currentFeature - 1);
        } else {
            updateActiveFeature(featureContainerElems.length-2);
        }
    }
}

function updateActiveFeature(i) {
    const lastCurrentFeature = currentFeature;
    currentFeature = i;

    featureContainerElems[i].id = 'active-feature';
    featureContainerElems[i].scrollIntoView({block: 'start', inline: 'center'});
    featureContainerElems[lastCurrentFeature].id = ''
}