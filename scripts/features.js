const featureCardElems = document.getElementsByClassName('feature-card');
const featureCardContainerElem = document.getElementById('feature-card-container');
let currentFeatureCard = 1

for (let i = 0; i < featureCardElems.length; i++) {
    featureCardElems[i].addEventListener('click', function() {
        if (i != currentFeatureCard) {
            updateActiveFeatureCard(i);
        }
    }, false)
}

function updateActiveFeatureCard(i) {
    const lastCurrentFeature = currentFeatureCard;
    currentFeatureCard = i;
    console.log(i)

    featureCardElems[i].id = 'active-feature-card';
    featureCardElems[lastCurrentFeature].id = "";
    if (lastCurrentFeature < i) {
        // featureCardContainerElem.scrollLeft = featureCardElems[i].offsetLeft - featureCardElems[i].offsetWidth/2
        featureCardContainerElem.scrollIntoView
    } else {
        featureCardContainerElem.scrollLeft = featureCardElems[i].offsetLeft - featureCardElems[i].offsetWidth
    }
}