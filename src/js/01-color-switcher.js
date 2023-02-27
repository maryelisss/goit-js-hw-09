const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
const body = document.querySelector("body");

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
            btnStart.disabled = true;
            btnStop.disabled=false;
            }, 1000);
    },
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        btnStart.disabled = false;
        btnStop.disabled = true;
    },
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', timer.start.bind(timer));
btnStop.addEventListener('click', timer.stop.bind(timer));