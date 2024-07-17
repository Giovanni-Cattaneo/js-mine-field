console.log("hello world")

let container = document.getElementById("container");

const markup = `<div class="box"></div>`

let boxes = document.getElementsByClassName("box")


for (let index = 0; index < 100; index++) {
    const element = index;
    container.insertAdjacentHTML("beforeend", markup)
}

boxes = Array.from(boxes)

// console.log(boxes)

boxes.forEach(box => {
    box.innerText = Math.floor(Math.random() * 100)
});