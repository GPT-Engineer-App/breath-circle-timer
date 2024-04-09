const countdownEl = document.getElementById("countdown");

let count = 10;
countdownEl.textContent = count;

const timer = setInterval(() => {
  count--;
  countdownEl.textContent = count;

  if (count === 0) {
    clearInterval(timer);
  }
}, 1000);
