const roundSelector = document.getElementById("round-selector")
const numberSelector = document.getElementById("number-selector")

const scales = {
  1: 1,
  2: 2,
  3: Math.PI,
  4: 4, //TODO: update to correct value
  5: 5, //TODO: update to correct value
}

let options = {
  "rounded": false,
  "number": 1,
  "scale": 1,
}

roundSelector.addEventListener("change", (event) => {
  options.rounded = event.target.value;
  roundSelector.firstElementChild.classList.toggle("active");
  roundSelector.lastElementChild.classList.toggle("active");
})
numberSelector.addEventListener("change", (event) => {
  options.number = parseInt(event.target.value);
  options.scale = scales[options.number];
})