console.log("hello world")

let container = document.getElementById("container");

const markup = `<div class="box"></div>`

const skull = `<i class="fa-solid fa-skull></i>"`

const flower = `<i class="fa-solid fa-flower></i>`

let boxes = document.getElementsByClassName("box")


for (let index = 0; index < 100; index++) {
    const element = index;
    container.insertAdjacentHTML("beforeend", markup)
}

boxes = Array.from(boxes)



function randomUniqueNum(range, outputCount) {

    let arr = []
    for (let i = 1; i <= range; i++) {
        arr.push(i)
    }

    let result = [];

    for (let i = 1; i <= outputCount; i++) {
        const random = Math.floor(Math.random() * (range - i));
        result.push(arr[random]);
        arr[random] = arr[range - i];
    }

    console.log(result)

    return result;
}

randomUniqueNum(100, 100)