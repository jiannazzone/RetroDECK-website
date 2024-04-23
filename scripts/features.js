featureTitles = document.getElementsByClassName('feature-list-item');
featureDetails = document.getElementsByClassName('feature-detail-container');
let currentFeature = 0;

for (let i = 0; i < featureTitles.length; i++) {
    featureTitles[i].addEventListener('click', function () {
        updateActiveFeature(i);
    }, false)
}

function updateActiveFeature(i) {
    currentFeature = i;
    for (let j = 0; j < featureTitles.length; j++) {
        featureTitles[j].removeAttribute('id');
        featureDetails[j].removeAttribute('id');
    }

    featureTitles[i].id = 'active-feature-item';
    featureDetails[i].id = 'active-feature-detail'
}