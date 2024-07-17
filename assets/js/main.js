console.log("hello world");

let container = document.getElementById("container");

const markup = `<div class="box"></div>`;

const skull = `<i class="fa-solid fa-skull"></i>`;

const flower = `<i class="fa-solid fa-flower"></i>`;


function start() {
    for (let index = 0; index < 100; index++) {
        container.insertAdjacentHTML("beforeend", markup);
    }

    let boxes = Array.from(document.getElementsByClassName("box"));

    function randomUniqueNum(range, outputCount) {
        let arr = [];
        for (let i = 1; i <= range; i++) {
            arr.push(i);
        }

        let result = [];
        for (let i = 1; i <= outputCount; i++) {
            const random = Math.floor(Math.random() * (range - i));
            result.push(arr[random]);
            arr[random] = arr[range - i];
        }

        console.log(result);
        return result;
    }

    let result = randomUniqueNum(100, 100);

    // Assegna i numeri ai box

    boxes.forEach((box, index) => {
        box.addEventListener("click", () => clickBox(box));

        box.textContent = result[index];
    });

    function clickBox(box) {
        console.log("hello world")
        box.style.backgroundColor = "red";
        console.log(box)
    }
}

start()