const rgbToHex = (rgb) => {
  let hex = Number(rgb).toString(16)
  return hex.length < 2 ? (hex = "0" + hex) : hex
}

/* === RGB to HEX === */
const hexSection = document.querySelector("#HEX-section")
const btn = document.querySelector("button")

btn.addEventListener("click", (event) => {
  const rSection = document.querySelector("#r-section")
  const gSection = document.querySelector("#g-section")
  const bSection = document.querySelector("#b-section")
  const rColor = document.querySelector("#r-section .RGB-blank").value
  const gColor = document.querySelector("#g-section .RGB-blank").value
  const bColor = document.querySelector("#b-section .RGB-blank").value

  if (
    rColor.length > 0 &&
    gColor.length > 0 &&
    bColor.length > 0 &&
    0 <= rColor &&
    rColor <= 255 &&
    0 <= gColor &&
    gColor <= 255 &&
    0 <= bColor &&
    bColor <= 255
  ) {
    // console.log(rColor, gColor, bColor);
    rSection.children[2].style.backgroundColor = `rgb(${rColor}, 0, 0)`
    gSection.children[2].style.backgroundColor = `rgb(0, ${gColor}, 0)`
    bSection.children[2].style.backgroundColor = `rgb(0, 0, ${bColor})`

    let newHex =
      "#" +
      rgbToHex(rColor).toUpperCase() +
      rgbToHex(gColor).toUpperCase() +
      rgbToHex(bColor).toUpperCase();
    // console.log(newHex);
    hexSection.children[1].textContent = newHex;
    hexSection.children[2].style.backgroundColor = newHex;

  } else {
    alert("請分別在 RGB 欄位輸入 0-255 的數字")
  }
})

/* === Color Slider === */
const colorSlider = document.querySelector("#color-slider")
const redSection = document.querySelector("#red-section")
const greenSection = document.querySelector("#green-section")
const blueSection = document.querySelector("#blue-section")
let redColor = document.querySelector("#red-section .points").value
let greenColor = document.querySelector("#green-section .points").value
let blueColor = document.querySelector("#blue-section .points").value
const sliderDisplay = document.querySelector(".slider-display")

colorSlider.addEventListener("click", (event) => {
  const target = event.target
  if (target.classList.contains("points")) {
    let colorValue = Number(target.value)
    let parentElement = target.parentElement
    // console.log(colorValue)
    // console.log(parentElement)
    if (parentElement.matches("#red-section")) {
      redColor = colorValue
      parentElement.children[1].value = colorValue
      parentElement.children[2].style.backgroundColor = `rgb(${colorValue}, 0, 0)`
      parentElement.children[2].textContent = colorValue
    } else if (parentElement.matches("#green-section")) {
      greenColor = colorValue
      parentElement.children[1].value = colorValue
      parentElement.children[2].style.backgroundColor = `rgb(0, ${colorValue}, 0)`
      parentElement.children[2].textContent = colorValue
    } else if (parentElement.matches("#blue-section")) {
      blueColor = colorValue
      parentElement.children[1].value = colorValue
      parentElement.children[2].style.backgroundColor = `rgb(0, 0, ${colorValue})`
      parentElement.children[2].textContent = colorValue
    }
    // console.log(parentElement)

    let sliderHex =
      "#" +
      rgbToHex(redColor).toUpperCase() +
      rgbToHex(greenColor).toUpperCase() +
      rgbToHex(blueColor).toUpperCase()
    // console.log(sliderHex)

    sliderDisplay.textContent = sliderHex
    colorSlider.style.backgroundColor = sliderHex
  }
})