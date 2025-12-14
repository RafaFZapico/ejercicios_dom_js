/*2.1 Inserta dinamicamente en un html un div vacio con javascript.
2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript.
2.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'.
2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
2.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.
2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here
*/
//? SOLUCIONES:
//! 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const emptyDiv = document.createElement('div')
document.body.appendChild(emptyDiv)
// insertamos texto "div vacio" para comprobar su funcionamiento
emptyDiv.innerText = 'div vacio'
//! 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
// Creamos los dos elementos(div y p)
const mydiv = document.createElement('div')
const parrafoa = document.createElement('p')
// introducimos un texto para poder ver en pantalla el resultado
parrafoa.innerText = 'Párrafo vacío'
// añadimos al div el elemento p
mydiv.appendChild(parrafoa)
// insertamos en el DOM el div y nos aparece en pantalla.
document.body.appendChild(mydiv)
//! 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const mydiva = document.createElement('div')
for (let i = 0; i < 6; i++) {
  const parrafob = document.createElement('p')
  // Insertamos un texto para comprobar que crea y enumera los distintos párrafos.
  parrafob.innerText = 'Este es el párrafo nº ' + (i + 1)
  mydiva.appendChild(parrafob)
}
document.body.appendChild(mydiva)
//! 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const parrafoc = document.createElement('p')
parrafoc.innerText = 'Soy dinámico!'
document.body.appendChild(parrafoc)
//! 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
//? Primera variante:
const texta = document.querySelectorAll('.fn-insert-here')[0]
texta.innerText = 'Wubba Lubba dub dub'
//? Segunda variante:
const textb = document.querySelector('h2')
textb.innerText = 'Wubba Lubba dub dub'
//? Tercera variante:
const textc = document.getElementsByTagName('h2')[0]
textc.innerText = 'Wubba Lubba dub dub'
//! 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
for (let i = 0; i < apps.length; i++) {
  let li = document.createElement('li')
  li.innerText = apps[i]
  ul.appendChild(li)
}
document.body.appendChild(ul)
//! 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elim = document.querySelectorAll('.fn-remove-me')
for (let i = 0; i < elim.length; i++) {
  const elim = document.querySelector('.fn-remove-me')
  elim.remove()
}
//! 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.	Recuerda que no solo puedes insertar elementos con .appendChild.
// Seleccionamos el segundo elemento [1] del array de divs.
const firstdiv = document.querySelectorAll('div')[1]
let middlep = document.createElement('p')
middlep.innerText = 'Voy en medio'
let parent = firstdiv.parentNode
// Insertamos antes del segundo div.
parent.insertBefore(middlep, firstdiv)
//! 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
// La dificultad de este ejercicio es discriminar los div del h2 ya que los tres tienen la misma clase(fn-insert-here) 🥵🥵🥵🥵
const insert = document.getElementsByClassName('fn-insert-here')
for (let i = 0; i < insert.length; i++) {
  let newinsert = String(insert[i])
  if (newinsert.includes('Div')) {
    let parrafod = document.createElement('p')
    parrafod.innerText = 'Voy dentro!'
    insert[i].appendChild(parrafod)
  }
}
