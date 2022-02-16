const maxNum = document.querySelector("#maxNum");
const guessNum = document.querySelector("input");
const playBtn = document.querySelector("#playBtn");
const result = document.querySelector("span");
const judge = document.querySelector("span");

function playBtnOnclick(e) {
  e.prevenetDefault(); //html 요소를 js에서 사용

  //입력이 제출되며 브라우저 초기화 고유동작막음
  /**
   * const guessInput = guessForm.querySelector("input");
   * 사용자 선택한 숫자 입력 하는 요소 js에서 사용할수있게 선언
   */

  result.classList.remove("hidden");
  judge.classList.remove("hidden");
  if (guessNum.value === "" && maxNum === "") return; //값 빈값이면 function 빠져나오기
  /**
   * const userGuess = parseInt(guessInput.value, 10);
<input>과 <form>태그를 통해 제출된 값은 문자열형태로 저장됩니다. guessInput.value의 타입은 현재 문자열입니다. 위 코드는 문자열 형태의 입력 값을 숫자 비교를 하기 위해 정수 형태로 바꿔주는 코드입니다.
parseInt()함수는 문자열을 정수 형태로 바꿔주는 함수입니다. 맨 마지막의 10은 10진수로 변경하라는 의미입니다.
   */
  if (0 <= maxNum.value && guessNum.value <= maxNum.value) {
    const machine = parseInt(Math.ceil(Math.random() * maxNum.value), 10);
    result.innerText = `your number is : ${guessNum.value},machine number is :${machine}`;
    if (machine === maxNum.value) {
      judge.innerText = "you win!";
    } else {
      judge.innerText = "you lost...";
    }
  }
}

playBtn.addEventListener("click", playBtnOnclick);
