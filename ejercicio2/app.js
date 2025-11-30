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
//console.log(emptyDiv)
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
console.log('mydiv contiene:', mydiv)
//! 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const mydiva = document.createElement('div')
for (let i = 0; i < 6; i++) {
  const parrafob = document.createElement('p')
  // Insertamos un texto para comprobar que crea y enumera los distintos párrafos.
  parrafob.innerText = 'Este es el párrafo nº ' + (i + 1)
  mydiva.appendChild(parrafob)
}
console.log('mydiva contiene:', mydiva)
document.body.appendChild(mydiva)
//! 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const parrafoc = document.createElement('p')
parrafoc.innerText = 'Soy dinámico!'
document.body.appendChild(parrafoc)
//! 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
//? Primera variante:
const texta = document.querySelectorAll('.fn-insert-here')[0]
console.log('la variable texta contiene.', texta)
texta.innerText = 'Wubba Lubba dub dub'
//? Segunda variante:
const textb = document.querySelector('h2')
console.log('textb vale:', textb)
textb.innerText = 'Wubba Lubba dub dub'
//? Tercera variante:
/*const textc = document.getElementsByTagName('h2')
console.log(textc)
textc.innerText = 'Wubba Lubba dub dub'
// Esta variante no funciona.*/
//! 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
console.log(ul)
for (let i = 0; i < apps.length; i++) {
  let li = document.createElement('li')
  li.innerText = apps[i]
  ul.appendChild(li)
}
document.body.appendChild(ul)
//! 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elim = document.querySelectorAll('.fn-remove-me')
console.log('elim contiene:', elim)
for (let i = 0; i < elim.length; i++) {
  const elim = document.querySelector('.fn-remove-me')
  elim.remove()
}
//elim.remove()

//! 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.	Recuerda que no solo puedes insertar elementos con .appendChild.
const firstdiv = document.querySelectorAll('div')[1]
console.log('el segundo div es:', firstdiv)
let middlep = document.createElement('p')
middlep.innerText = 'Voy en medio'
let parent = firstdiv.parentNode
console.log(parent)
parent.insertBefore(middlep, firstdiv)
//! 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const insert = document.getElementsByClassName('fn-insert-here')
console.log('insert contiene', insert)
for (let i = 0; i < insert.length; i++) {
  let parrafod = document.createElement('p')
  parrafod.innerText = 'Voy dentro!'
  //console.log('los elementos de insert son:', insert[i])
  insert[i].appendChild(parrafod)
}
