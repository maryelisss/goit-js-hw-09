import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector("button[data-start]");
const timerDays = document.querySelector("span[data-days]");
const timerHours = document.querySelector("span[data-hours]");
const timerMinutes = document.querySelector("span[data-minutes]");
const timerSeconds = document.querySelector("span[data-seconds]");

btnStart.disabled=true;
let userDate = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userDate = selectedDates[0];
        if (userDate < Date.now()) {
            window.alert(`Please choose a date in the future`);
            return;
        }
        btnStart.disabled=false;
    },
};

flatpickr("#datetime-picker", options);


class Timer {
    constructor({ onTick }) {
        this.isActive = false;
        this.onTick = onTick;
        }
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        setInterval(() => {
            const currentDate = Date.now();
            const deltaTime = userDate - currentDate;
            const time = this.convertMs(deltaTime)
            this.onTick(time);
        }, 1000);
    }

    convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days = this.pad(Math.floor(ms / day));
        const hours = this.pad(Math.floor((ms % day) / hour));
        const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
        const seconds = this.pad(Math.floor((((ms % day) % hour) % minute) / second));

        return { days, hours, minutes, seconds };
    }
            
    pad(value) {
        return String(value).padStart(2, '0');
        };   
}

const timer = new Timer({
    onTick: updateTimer,
    
})


function updateTimer({ days, hours, minutes, seconds }) {
    timerDays.textContent = `${days}`;
    timerHours.textContent = `${hours}`;
    timerMinutes.textContent = `${minutes}`;
    timerSeconds.textContent = `${seconds}`;
}

btnStart.addEventListener('click', timer.start.bind(timer));