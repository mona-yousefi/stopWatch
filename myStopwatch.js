const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const lap = document.getElementById("lap");
const resault = document.getElementById("res");
const MainBd = document.getElementById("MainBd");
let countlap = 0;
let counterms = 0;
let counters = 0;
let counterm = 0;
let time = null;

const addZero = (n) => {
  if (n < 10) return "0" + n;
  return n;
};
function addNumber() {
  counterms = counterms + 1;
  resault.innerText =
    addZero(counterm) + ":" + addZero(counters) + "." + addZero(counterms);
  if (counterms == 100) {
    counterms = 0;
    counters = counters + 1;
  }
  if (counters == 60) {
    counters = 0;
    counterm = counterm + 1;
  }
}
btn1.addEventListener("click", () => {
  time = setInterval(addNumber, 10);
  btn1.disabled = true;
  btn2.disabled = false;
  lap.disabled = false;
});
btn2.addEventListener("click", () => {
  clearInterval(time);
  btn1.disabled = false;
  btn2.disabled = true;
  lap.disabled = true;
});
btn3.addEventListener("click", () => {
  btn1.disabled = false;
  btn2.disabled = true;
  clearInterval(time);
  resault.innerText = "00:00.00";
  MainBd.innerHTML = "";
  lap.disabled = true;
  countlap = 0;
  counterms = 0;
  counters = 0;
  counterm = 0;
});
lap.addEventListener("click", () => {
  MainBd.innerHTML += `
        <tr>
            <td>${(countlap = countlap + 1)}</td>
            <td>${addZero(counterm)} : ${addZero(counters)} . ${addZero(
    counterms
  )}</td>
        </tr>
    `;
});
