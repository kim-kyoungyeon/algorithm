const h1 = document.querySelector("div.hello:first-child h1");
// console.dir(title);
// title.innerText = "hello!";

// console.log(title.className);

function handleTitleClick() {
  // console.log(title.id);
  console.log(h1.style.color);
  h1.style.color = "white";
  consol.log(h1.style.color);
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

h1.addEventListener("click", handleTitleClick);

window.addEventListener("resize", handleWindowResize);
