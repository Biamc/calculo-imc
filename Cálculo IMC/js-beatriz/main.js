import { calculateIMC, displayResulMessage } from "./general-functions.js";
import { AlertErro, Modes, handelKeyDown } from "./modes.js";

export {inputHeight, inputWeight}

const buttonIMC = document.querySelector('#button-IMC')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


//Events

buttonIMC.addEventListener('click', resultIMC)
Modes.buttonClose.addEventListener('click', Modes.close)
Modes.buttonClose.addEventListener('click', Modes.close)
window.addEventListener('keydown', handelKeyDown)
inputWeight.oninput = () => AlertErro.close()
inputHeight.oninput = () => AlertErro.close()

//FUNCTION

function resultIMC(event) {
  event.preventDefault()
  
  if(!Number(inputHeight.value) || !Number(inputWeight.value)){
    AlertErro.open()
    inputHeight.value = ""
    inputWeight.value = ""
    return;
  }
  calculateIMC()
  Modes.open()
  displayResulMessage()
  inputHeight.value = ""
  inputWeight.value = ""  
}









