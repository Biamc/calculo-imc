import { Modal } from "./modal.js";
import { AlertErro } from "./alert-error.js";
import { notANumber, CalculateIMC, displayResulMessage } from "./utils.js";

const form = document.querySelector('form')

export const inputWeight = document.querySelector('#weight')
export const inputHeight = document.querySelector('#height')


form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value
  
  const weightOrHeigthIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeigthIsNotANumber) {
    AlertErro.open()
    inputWeight.value = ""
    inputHeight.value = ""
    return;
  }

  AlertErro.close()
  const result = CalculateIMC(weight, height)
  displayResulMessage(result)
 
  //modalWrapper.classList.add('open')
}

inputWeight.oninput = () => AlertErro.close()
inputHeight.oninput = () => AlertErro.close()


