const textArea = document.getElementById("textArea");
const done = document.getElementById("doneButton");
let tags = document.querySelector(".tags");

let count = 0;

tags.innerHTML += `<span class="tag" style="visibility: hidden"></span>`;

textArea.addEventListener('keyup', (e) => {
    document.getElementsByClassName("tag")[count].innerText = textArea.value;
    document.getElementsByClassName("tag")[count].style.visibility = "visible";
    if (e.key === "Enter")
    {
        e.preventDefault();
        textArea.value = "";
        tags.innerHTML += `<span class="tag" style="visibility: hidden"></span>`;
        count++;
    }
});



done.addEventListener('click', event => {
    const times = 5;
    tags.removeChild(tags.lastChild);

    const intervalID = setInterval(() => {
        const randomTag = pickRandomTag();

        highLight(randomTag);

        setTimeout(() =>{
            unHighLight(randomTag);
        },500)

    }, 500)

    setTimeout(() => {
        clearInterval(intervalID)
        setTimeout(() => {
            const random = pickRandomTag();
            highLight(random);
        })
    }, times * 1000)
});

function pickRandomTag() {
    const createdTag = document.querySelectorAll(".tag");
    return createdTag[Math.floor(Math.random() * createdTag.length)];
}

function highLight(tag) {
    tag.classList.add("highlight");
}

function unHighLight(tag) {
    tag.classList.remove("highlight");
}