/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click
1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
*/
//? SOLUCIONES:
//! 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const button = document.createElement('button')
button.classList.add('btnToClick')
button.innerText = 'Click'
document.body.appendChild(button)
button.addEventListener('click', (event) => {
  const buttonContent = document.querySelector('.click').value
  console.log(buttonContent)
})
//! 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focus = document.querySelector('.focus')
console.log('el elemento focus es:', focus)
focus.addEventListener('focus', (event) => {
  console.log('El evento focus es:', event)
  const inputValue = document.querySelector('.focus').value
  console.log('inputvalor es:', inputValue)
})
//! 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const input = document.querySelector('.value')
console.log('el elemento input contiene:', input)
input.addEventListener('input', (ev) => {
  const contentInput = document.querySelector('.value').value
  console.log(contentInput)
  console.log(contentInput.length)
})
