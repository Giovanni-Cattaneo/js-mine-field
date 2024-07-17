console.log("hello world");

let container = document.getElementById("container");

const markup = `<div class="box"></div>`;

const skull = `<i class="fa-solid fa-skull"></i>`;

const flower = `<i class="fa-solid fa-seedling"></i>`;

let skullArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let cover = document.getElementById("cover")


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
        box.addEventListener("click", () => clickBox(box, index));

    });

    function clickBox(box, index) {
        console.log("hello world")

        if (skullArray.includes(result[index])) {
            box.classList.add("red")
            box.insertAdjacentHTML("beforeend", skull);
            box.removeEventListener("click", clickBox)
            cover.classList.add("cover")
        } else {
            if (!box.classList.contains("green")) {
                box.insertAdjacentHTML("beforeend", flower)
                box.classList.add("green")
            }

        }

        console.log(box)
    }
}

start()