const redElement = document.getElementById("red");
const yellowElement = document.getElementById("yellow");
const greenElement = document.getElementById("green");

class Svetofor {
    async red() {
        let time = 13;
        redElement.classList.add("bg-[#da251d]");
        redElement.textContent = time;

        while (time > 0) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            if (time <= 4) {
                yellowElement.classList.add("bg-[#f4c000]");
            }
            time--;
            redElement.textContent = time;
        }

        yellowElement.classList.remove("bg-[#f4c000]");
        redElement.classList.remove("bg-[#da251d]");
        redElement.textContent = "";

        await this.green();
    }

    async yellow() {
        let time = 3;
        yellowElement.textContent = time;

        yellowElement.classList.add("bg-[#f4c000]");

        while (time > 0) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            time--;
            yellowElement.textContent = time;
        }
        yellowElement.classList.remove("bg-[#f4c000]");
        yellowElement.textContent = "";

        await this.red();
    }

    async green() {
        let time = 10;
        let id;
        greenElement.classList.add("bg-[green]");
        greenElement.textContent = time;

        while (time > 0) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            if (time <= 4) {
                greenElement.classList.remove("bg-[green]");
                id = setTimeout(() => {
                    greenElement.classList.add("bg-[green]");
                }, 500);

                greenElement.textContent = time;
            }
            time--;
            greenElement.textContent = time;

            if (time == 0) {
                clearTimeout(id);
            }
        }

        greenElement.classList.remove("bg-[green]");
        greenElement.textContent = "";
        await this.yellow();
    }
}

const s1 = new Svetofor();

s1.red();
