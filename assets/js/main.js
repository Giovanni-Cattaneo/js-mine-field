let container = document.getElementById("container");

const markup = `<div class="box"></div>`;

const skull = `<i class="fa-solid fa-skull"></i>`;

const flower = `<i class="fa-solid fa-seedling"></i>`;

let skullArray = randomUniqueNum(64, 20)

let cover = document.getElementById("cover")

let successCover = document.getElementById("success_cover")

let option = document.getElementById("option")

const starting = document.getElementById("starting")

success = 0

const repeat = document.getElementById("retry")

repeat.addEventListener("click", () => retry())

starting.addEventListener("click", () => retry())

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



// utility function area

function retry() {
    let boxes = Array.from(document.getElementsByClassName("box"));
    let succ = document.querySelector(".success")
    if (succ) {
        succ.remove()
    }
    boxes.forEach(box => box.remove());
    cover.classList.remove("cover")
    cover.style.display = "none"
    start()
}

function clickBox(box, index, result) {
    if (skullArray.includes(result[index])) {
        box.classList.add("red")
        box.insertAdjacentHTML("beforeend", skull);
        cover.classList.add("cover")
        cover.style.display = "flex"
        if (success === 1) {
            cover.insertAdjacentHTML("beforeend", `<p class="success">Hai trovato ${success} fiore</p>`)
        } else if (success > 1) {
            cover.insertAdjacentHTML("beforeend", `<p class="success">Hai trovato ${success} fiori</p>`)
        } else {
            cover.insertAdjacentHTML("beforeend", `<p class="success">Nemmeno un fiore trovato, che sfortuna</p>`)
        }
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
        if (success === (result.length - skullArray.length)) {
            successCover.classList.add("cover")
            successCover.style.display = "flex"
        }

    }
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
