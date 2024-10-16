let timing = 2000;

// let stack = document.querySelector(".stack");
let stacks = document.getElementsByClassName('stack');

// [...stack.children].reverse().forEach(i => stack.append(i));
for (let i = 0; i < stacks.length; i++) {
    [...stacks[i].children].reverse().forEach(j => stacks[i].append(j));
    stacks[i].addEventListener("click", swap);
}

function swap(e) {
    let thisTarget = e.target
    if (!thisTarget.classList.contains('screenshot')) return;
    thisTarget.style.animation = `swap ${timing}ms ease-in-out forwards`;

    setTimeout(() => {
        thisTarget.style.animation = "";
        this.prepend(thisTarget);
    }, timing);
}