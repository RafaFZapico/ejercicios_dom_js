/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click
1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
*/
//? SOLUCIONES:

//! 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
// Creamos el botón desde javascript y lo añadimos al DOM.
const button = document.createElement('button')
button.id = 'btnToClick'
button.innerText = 'Click here'
document.body.appendChild(button)
// Creamos el evento click y mostramos en consola el dato introducido en el input.click.
button.addEventListener('click', (event) => {
  const buttonContent = document.querySelector('.click').value
  console.log(buttonContent)
})
const prespuesta = document.createElement('p')
console.log('la variable prespuesta contiene:', prespuesta)

//! 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focus = document.querySelector('.focus')
console.log('el elemento focus es:', focus)
focus.addEventListener('focus', (event) => {
  const inputValue = document.querySelector('.focus').value
  console.log('El valor del input es:', inputValue)
})
// Todo este código anterior funciona correctamente.
//! 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const input = document.querySelector('.value')
input.addEventListener('input', (ev) => {
  const contentInput = document.querySelector('.value').value
  console.log(contentInput)
})
// Todo este código anterior funciona correctamente.
