const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
const body = document.querySelector("body");

btnStart.addEventListener('click', ()=>{timer.start()});
btnStop.addEventListener('click', ()=>{timer.stop()});

btnStop.setAttribute("disabled", "true");

const timer = {
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.intervalId = setInterval(() => {
            let color = getRandomHexColor()
            body.style.backgroundColor = color;
            btnStart.setAttribute("disabled", "true");
            btnStop.removeAttribute("disabled");

            }, 1000);
    },
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        btnStart.removeAttribute("disabled");
        btnStop.setAttribute("disabled", "true");
    },
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
