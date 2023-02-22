export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  ButtonClose: document.querySelector('.modal button.close'),

  open: function () {
    Modal.wrapper.classList.add('open')
  }, // means the same thing
  close(){
    Modal.wrapper.classList.remove('open')
  } //means the same thing
}//object literal

//you separate the datas estructures and separate the responsabilities

Modal.ButtonClose.onclick = () => {

  Modal.close()
  //modalWrapper.classList.remove('open')
}

window.addEventListener('KeyDown', handelKeyDown )

function handelKeyDown (event) {
  if (event.key == 'Escape') {
    Modal.close()
  } 
}