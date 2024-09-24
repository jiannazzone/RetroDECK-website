const screenshotElems = document.getElementsByClassName('screenshot');
const featureCardElems = document.getElementsByClassName('feature-card');
let currentFeature = 1

for (let i = 0; i < featureCardElems.length; i++) {
    screenshotElems[i].addEventListener('click', function() {
        if (i != currentFeature) {
            updateActiveFeature(i);
        }
    })
    featureCardElems[i].addEventListener('click', function() {
        if (i != currentFeature) {
            updateActiveFeature(i);
        }
    })
}

function updateActiveFeature(i) {
    const lastCurrentFeature = currentFeature;
    currentFeature = i;

    screenshotElems[i].id = 'active-screenshot';
    screenshotElems[lastCurrentFeature].id = "";    

    featureCardElems[i].id = 'active-feature-card';
    featureCardElems[lastCurrentFeature].id = "";
    
    
    featureCardElems[i].scrollIntoView({inline: 'center'});
    screenshotElems[i].scrollIntoView({inline: 'center'});
}