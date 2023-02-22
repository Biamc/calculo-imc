export {notANumber, CalculateIMC, displayResulMessage}

import {Modal} from "./modal.js"
import { inputHeight, inputWeight } from "./main2.js";

function notANumber(value) {
  return isNaN(value) || value == ""
}

function CalculateIMC(weight, height) {
  
  return (weight / ((height / 100 ) ** 2)).toFixed(2)
 
}

function displayResulMessage (result){
  
  const message = `Seu IMC é de ${result}`

  inputWeight.value = ""
  inputHeight.value = ""
  
  Modal.message.innerText = message
  Modal.open()
}

