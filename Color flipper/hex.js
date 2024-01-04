const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";

  for (i = 0; i < 6; i++) {
    hexColor = hexColor + hex[RandomNumber()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function RandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
