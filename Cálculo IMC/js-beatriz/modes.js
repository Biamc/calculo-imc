

export {Modes, AlertErro, handelKeyDown}

const Modes = {
  buttonClose: document.querySelector('.close'),
 
  wrapper: document.querySelector('.modal-wrapper'),

  open() {
    Modes.wrapper.classList.add('open')
  },
  close(){
    Modes.wrapper.classList.remove('open')
  }
}



function handelKeyDown (event) {
  if (event.key == 'Escape') {
    Modes.close()
  }
}


const AlertErro = {
  element: document.querySelector('.alert-error'),
  open(){
    AlertErro.element.classList.add('open')
  },
  close() {
    AlertErro.element.classList.remove('open')
  }
}
