//variables
const btn = document.getElementById("btn");
const bg = document.getElementsByClassName("bg")[0];

btn.addEventListener("click", function () {
  // random color
  const color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;

  bg.style.background = color;
});
