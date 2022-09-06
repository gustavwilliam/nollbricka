const roundSelector = document.getElementById("round-selector")
const numberSelector = document.getElementById("number-selector")
const scaleSelector = document.getElementById("scale-selector")
const valueTable = document.getElementById("value-table")

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

const baseDimensions = {
  "height": 140.001,
  "width": 81.00,
  "square width": 10.125,
  "square height": 2.028 * Math.PI^2,
  "name space": 14.00,
  "top margin": 21.01,
  "top offset": 5.52,
  "corner radius": 16.01,
  "nollan inside": 19.99,
  "nollan width": 10.00,
}

roundSelector.addEventListener("change", (event) => {
  options.rounded = event.target.value;
  roundSelector.firstElementChild.classList.toggle("active");
  roundSelector.lastElementChild.classList.toggle("active");
})
numberSelector.addEventListener("change", (event) => {
  if (event.target.value === "custom") return
  options.number = parseInt(event.target.value);
  options.scale = scales[options.number];
  scaleSelector.value = options.scale;
})
scaleSelector.addEventListener("change", (event) => {
  let scale;
  try {
    scale = parseInt(event.target.value);
  } catch {
    scale = parseFloat(event.target.value)
  }
  options.scale = scale;
  const number = Object.keys(scales).find(key => scales[key] === scale)
  if (number !== undefined) {
    options.number = parseInt(number);
    numberSelector.value = parseInt(number);
  } else {
    numberSelector.value = "custom";
  }
})

const fillValueTable = () => {

}