const maxNum = document.querySelector("#maxNum");
const guessNum = document.querySelector("#guessNum");
const playBtn = document.querySelector("#playBtn");
const result = document.querySelector("span");
const judge = document.querySelector("span");

function playBtnOnclick(e) {
  e.prevenetDefault();

  result.classList.remove("hidden");
  judge.classList.remove("hidden");
  if (0 <= maxNum.value && guessNum.value <= maxNum.value) {
    const machine = parseInt(Math.ceil(Math.random() * maxNum.value));
    result.innerText = `your number is : ${guessNum.value},machine number is :${machine}`;
    if (machine === maxNum.value) {
      judge.innerText = "you win!";
    } else {
      judge.innerText = "you lost...";
    }
  }
}

playBtn.addEventListener("click", playBtnOnclick);
