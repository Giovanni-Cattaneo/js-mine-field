console.log("hello world");

let container = document.getElementById("container");

const markup = `<div class="box"></div>`;

const skull = `<i class="fa-solid fa-skull"></i>`;

const flower = `<i class="fa-solid fa-seedling"></i>`;

let skullArray = randomUniqueNum(64, 25)

console.log(skullArray)

let cover = document.getElementById("cover")

let option = document.getElementById("option")

const starting = document.getElementById("starting")

let begin = true

success = 0

const retry = document.getElementById("retry")

retry.addEventListener("click", function () {
    let boxes = Array.from(document.getElementsByClassName("box"));
    let succ = document.querySelector(".success")
    console.log(succ)
    succ.remove()
    boxes.forEach(box => box.remove());
    cover.classList.remove("cover")
    cover.style.display = "none"
    start()
})

starting.addEventListener("click", function () {
    let boxes = Array.from(document.getElementsByClassName("box"));
    boxes.forEach(box => box.remove());
    cover.classList.remove("cover")
    cover.style.display = "none"
    start()
})


function start() {

    if (option.value === "easy") {
        for (let index = 0; index < 100; index++) {
            container.insertAdjacentHTML("beforeend", markup);
        }

        let boxes = Array.from(document.getElementsByClassName("box"));

        let result = randomUniqueNum(100, 100);

        // Assegna i numeri ai box

        boxes.forEach((box, index) => {
            box.addEventListener("click", () => clickBox(box, index, result));

        });

    } else if (option.value === "hard") {
        for (let index = 0; index < 81; index++) {
            container.insertAdjacentHTML("beforeend", markup);
        }

        let boxes = Array.from(document.getElementsByClassName("box"));

        let result = randomUniqueNum(81, 81);

        // Assegna i numeri ai box

        boxes.forEach((box, index) => {
            box.style.width = (100 / 9) + "%";
            box.addEventListener("click", () => clickBox(box, index, result));

        });

    } else {
        for (let index = 0; index < 64; index++) {
            container.insertAdjacentHTML("beforeend", markup);
        }

        let boxes = Array.from(document.getElementsByClassName("box"));

        let result = randomUniqueNum(64, 64);

        // Assegna i numeri ai box

        boxes.forEach((box, index) => {
            box.style.width = (100 / 8) + "%";
            box.addEventListener("click", () => clickBox(box, index, result));

        });

    }


}

function clickBox(box, index, result) {
    console.log("hello world")

    if (skullArray.includes(result[index])) {
        box.classList.add("red")
        box.insertAdjacentHTML("beforeend", skull);
        box.removeEventListener("click", clickBox)
        cover.classList.add("cover")
        cover.style.display = "flex"
        cover.insertAdjacentHTML("beforeend", `<p class="success">Hai trovato ${success} fiori</p>`)
        if (success > 0) {
            success = 0
        }
    } else {
        if (!box.classList.contains("green")) {
            success++
            console.log(success)
            box.insertAdjacentHTML("beforeend", flower)
            box.classList.add("green")
        }

    }

    console.log(box)

}

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
    return result;
}
