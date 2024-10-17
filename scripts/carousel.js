let timing = 250;
let stacks = document.getElementsByClassName('stack');

for (let i = 0; i < stacks.length; i++) {
    [...stacks[i].children].reverse().forEach(j => stacks[i].append(j));
    if (stacks[i].children.length > 1) {
        stacks[i].addEventListener('click', swap);
        stacks[i].style.cursor = 'pointer';
    }
}

function swap(e) {
    let thisTarget = e.target
    if (!thisTarget.classList.contains('screenshot')) return;
    thisTarget.style.animation = `fade-out ${timing}ms ease-in forwards`;

    setTimeout(() => {
        thisTarget.style.animation = `fade-in ${timing}ms ease-out forwards`;
        this.prepend(thisTarget);
    }, timing);

    setTimeout(() => {
        // this.prepend(thisTarget);
        thisTarget.style = '';
    }, 2*timing);
}