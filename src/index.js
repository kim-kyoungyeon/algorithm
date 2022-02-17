const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const chosenImage = colors[Math.floor(Math.random() * colors.length)];

const bgImage = document.createElement("body");

const Btn = document.querySelector("button");

function onClick(e) {
  e.preventDefault();
  document.body.appendChild(bgImage);
  bgImage.setAttribute(
    "style",
    "background: linear-gradient(0.25turn,chosenImage,chosenImage));"
  );
}
Btn.addEventListener("click", onClick);
