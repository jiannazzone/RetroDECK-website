let timing = 400;
let stacks = document.getElementsByClassName('stack');

for (let i = 0; i < stacks.length; i++) {
    [...stacks[i].children].reverse().forEach(j => stacks[i].append(j));
    stacks[i].addEventListener("click", swap);
}

function swap(e) {
    let thisTarget = e.target
    if (!thisTarget.classList.contains('screenshot')) return;
    thisTarget.style.animation = `fade-out ${timing}ms ease-in forwards`;

    setTimeout(() => {
        thisTarget.style.animation = `fade-in ${timing}ms ease-out forwards`;
        this.prepend(thisTarget);
        // thisTarget.style = '';

    }, timing);

    setTimeout(() => {
        thisTarget.style = '';
    }, 2*timing);
}