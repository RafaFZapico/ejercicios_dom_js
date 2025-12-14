/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
1.2 Elimina el elemento que tenga la clase .fn-remove-me.
1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs.
1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html. */
//? SOLUCIONES:
//const { createElement } = require('react')
//! 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ul = document.createElement('ul')
for (const element of countries) {
  const li = document.createElement('li')
  li.innerText = element
  ul.appendChild(li)
}
document.body.appendChild(ul)
//! 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elim = document.querySelector('.fn-remove-me')
elim.remove()
//! 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const ulA = document.createElement('ul')
for (const element of cars) {
  const li = document.createElement('li')
  li.innerText = element
  ulA.appendChild(li)
}
const div = document.querySelector('[data-function="printHere"]')
div.appendChild(ulA)
//! 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countriesB = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
// Usaremos un bucle for of
let count = 1
for (const element of countriesB) {
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  const image = document.createElement('img')
  h4.innerText = element.title + ' ' + count
  image.src = element.imgUrl
  div.appendChild(h4)
  div.appendChild(image)
  document.body.appendChild(div)
  count++
}
//! 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const lastbutton = document.createElement('button')
lastbutton.innerText = 'Pulse para borrar último'
document.body.appendChild(lastbutton)
console.log('1 button vale:', lastbutton)
lastbutton.addEventListener('click', (ev) => {
  const bottomA = document.querySelectorAll('div')[countriesB.length]
  //console.log('bottomA vale:', bottomA)
  bottomA.remove()
})
//! 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
// Creamos un nodo con todos los div creando un array llamado divs
const divs = document.getElementsByTagName('div')
//console.log('los divs que contiene la apli. son:', divs)
let counter = 1
// recorremos el array divs con un bucle for...of y vamos creando los botones en cada div, además introducimos atributos de clase, en los div y en los botones, que seran usados más adelante.
for (const i of divs) {
  const button = document.createElement('button')
  button.innerText = 'Pulse para borrar '
  let clasname = 'button'
  i.classList.add(counter)
  i.appendChild(button)
  button.classList.add(clasname)
  button.classList.add(counter)
  counter++
}
console.log('los div son', divs)
// creamos un array con los botones creados.
const botones = document.querySelectorAll('.button')
console.log('El array botones contiene:', botones)
let divremove
let numberOfDivRemove
botones.forEach((boton) => {
  boton.addEventListener('click', (event) => {
    let idboton = event.target.className
    console.log('El botón pulsado es:', idboton)
    numberOfDivRemove = idboton.slice(idboton.length - 1)
    console.log('numberOfDivRemove vale:', numberOfDivRemove) // OK
    let parent = boton.parentNode
    console.log('El padre es:', parent)
    console.log('El div que hay que borrar es:', parent)
    parent.remove()
  })
})
