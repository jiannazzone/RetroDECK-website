const featureTitles = document.getElementsByClassName('feature-list-item');
const featureDetails = document.getElementsByClassName('feature-detail-container');
const featureList = document.getElementById('feature-list');
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
    // console.log(`${lastCurrentFeature} -> ${currentFeature}`);

    // New current feature
    featureTitles[currentFeature].className += ' gradient-spin my-gradient';
    featureTitles[currentFeature].id = 'active-feature-item';
    featureDetails[currentFeature].id = 'active-feature-detail'

    // Reset previous current feature
    featureTitles[lastCurrentFeature].removeAttribute('id');
    featureTitles[lastCurrentFeature].className = 'col feature-list-item rounded-3 m-0';
    featureTitles[lastCurrentFeature].style = '';
    featureDetails[lastCurrentFeature].removeAttribute('id');

    // Update scroll position
    const offsetPadding = 20;
    if (lastCurrentFeature < currentFeature) {
        featureList.scrollLeft = featureTitles[currentFeature].offsetLeft - offsetPadding;
    } else {
        featureList.scrollLeft = featureTitles[currentFeature].offsetLeft - featureTitles[currentFeature].offsetWidth/2 - offsetPadding;
    }
    
}

const widthOutput = document.querySelector("#width");
window.addEventListener('resize', function() {
    const featureListElem = document.getElementById('feature-list');
    if (widthOutput < 768) {
        featureListElem.classList += "text-nowrap";
    }
})