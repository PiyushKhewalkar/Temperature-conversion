const toFahrenheit = document.getElementById("toFahrenheit")
const toCelsious = document.getElementById("toCelsious")
const result = document.getElementById("result")
const inputEl = document.getElementById("textBox")
let temp;

function convert(){
  if(toFahrenheit.checked){
    temp = Number(inputEl.value)
    temp = temp * 9/5 + 32
    result.textContent = temp.toFixed(1) + "F"
  }
  else if(toCelsious.checked){
    temp = Number(inputEl.value)
    temp = (temp-32) * (5/9)
    result.textContent = temp.toFixed(1) + "C"
  }
  else {
    result.textContent = "Please Select a Unit"
  }
}