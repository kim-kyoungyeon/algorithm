const h1 = document.querySelector("div.hello:first-child h1");
// console.dir(title);
// title.innerText = "hello!";

// console.log(title.className);

function handleClick() {
  const clickedClass = "clicked";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
  console.log(h1.style.color);
  h1.style.color = "white";
  console.log(h1.style.color);
}
//h1.addEventListener("click", handleClick);

function handleWindowResize() {
  document.getElementById("01").style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  //   const cuurentColor = document.body.style.backgroundColor;
  //   let newColor;
  //   if (cuurentColor === "blue") {
  //     newColor = "purple";
  //   } else {
  //     newColor = "yellow";
  //   }
  //   cuurentColor = newColor;
}
window.addEventListener("resize", handleWindowResize);

function handleWindowCopy() {
  alert("copier! ");
}

window.addEventListener("copy", handleWindowCopy);
// const // non change

// let// creta new 변수

// const a = "연킴"

// console.log("hello" +a);
// a = "김경" //const에 값을 넣을경우 update못함

// console.log("hello" +a);

/**
 * null  - empty nothing 의 의미 ,
 * undefined = 변수의 값이 정해지지 않음 (타입 x 존재x )
 * let something
 * console.log (something) // undefined <- 메모리에 변수는 할당(공간), 하지만 값이 없다
 */
