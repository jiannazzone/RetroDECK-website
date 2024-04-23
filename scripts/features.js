featureTitles = document.getElementsByClassName('feature-list-item');
featureDetails = document.getElementsByClassName('feature-detail-container');
// let currentFeature = 0;

for (let i = 0; i < featureTitles.length; i++) {
    featureTitles[i].addEventListener('click', function () {
        updateActiveFeature(i);
    }, false)
    if (featureTitles[i].id != 'active-feature-item') {
        featureTitles[i].className = 'row feature-list-item rounded-3';
    }
}

function updateActiveFeature(i) {
    // Reset all
    for (let j = 0; j < featureTitles.length; j++) {
        featureTitles[j].removeAttribute('id');
        featureDetails[j].removeAttribute('id');
        featureTitles[j].className = 'row feature-list-item rounded-3';
        featureTitles[j].style = '';
    }

    // currentFeature = i;

    // Update the active feature
    featureTitles[i].id = 'active-feature-item';
    featureDetails[i].id = 'active-feature-detail'

    // Handle styles
    featureTitles[i].className += ' gradient-spin my-gradient';
}