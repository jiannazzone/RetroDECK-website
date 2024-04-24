const featureTitles = document.getElementsByClassName('feature-list-item');
const featureDetails = document.getElementsByClassName('feature-detail-container');
let currentFeature = 0;

for (let i = 0; i < featureTitles.length; i++) {
    featureTitles[i].addEventListener('click', function () {
        if (i != currentFeature) {
            updateActiveFeature(i);
        }
    }, false)

    // We need to remove the gradient so that linearBackground is hidden
    if (featureTitles[i].id != 'active-feature-item') {
        featureTitles[i].className = 'col feature-list-item rounded-3 m-0';
    }
}

function updateActiveFeature(i) {
    const lastCurrentFeature = currentFeature;
    currentFeature = i;

    // New current feature
    featureTitles[currentFeature].className += ' gradient-spin my-gradient';
    featureTitles[currentFeature].id = 'active-feature-item';
    featureDetails[currentFeature].id = 'active-feature-detail'

    // Reset previous current feature
    featureTitles[lastCurrentFeature].removeAttribute('id');
    featureTitles[lastCurrentFeature].className = 'col feature-list-item rounded-3 m-0';
    featureTitles[lastCurrentFeature].style = '';
    featureDetails[lastCurrentFeature].removeAttribute('id');

}