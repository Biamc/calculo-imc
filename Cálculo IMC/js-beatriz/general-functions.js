export {calculateIMC, displayResulMessage}

import {inputHeight, inputWeight} from "./main.js"

function calculateIMC(weight, height) {
  
  const IMC = (Number(weight / ((height/100 )** 2))).toFixed(2)
  
  return IMC
 
}


function displayResulMessage () {
  const height = inputHeight.value
  const weight = inputWeight.value
  const resultIMC = document.querySelector('.modal .title span')  
  const messageResult = `O seu IMC é de ${calculateIMC(weight, height)}`
  resultIMC.innerText = messageResult
}