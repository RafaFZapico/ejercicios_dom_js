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
  //console.log(li)
  ul.appendChild(li)
}
document.body.appendChild(ul)
//! 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elim = document.querySelector('.fn-remove-me')
console.log('elim contiene:', elim)
elim.remove()
//! 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const ulA = document.createElement('ul')
for (const element of cars) {
  const li = document.createElement('li')
  li.innerText = element
  //console.log(li)
  ulA.appendChild(li)
}
//console.log(ulA)
const div = document.querySelector('[data-function="printHere"]')
console.log('La función printHere vale:', div)
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
  //console.log(element)
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  const image = document.createElement('img')
  h4.innerText = element.title + ' ' + count
  //console.log(h4)
  image.src = element.imgUrl
  div.appendChild(h4)
  div.appendChild(image)
  document.body.appendChild(div)
  count++
}
//numberAux = divs.length
//! 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const lastbutton = document.createElement('button')
lastbutton.innerText = 'Pulse para borrar último'
document.body.appendChild(lastbutton)
console.log('1 button vale:', lastbutton)
lastbutton.addEventListener('click', (ev) => {
  const bottomA = document.querySelectorAll('div')[countriesB.length]
  console.log('bottomA vale:', bottomA)
  bottomA.remove()
})
//! 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
// Creamos un nodo con todos los div creando un array llamado divs
const divs = document.getElementsByTagName('div')
const twindivs = divs
console.log('primer valos de twindivs:', twindivs)
const numberAux = divs.length // Esta variable será usada más adelante.

//console.log('los divs que contiene la apli. son:', divs)
let counter = 1
// recorremos el array divs con un bucle for...of y vamos creando los botones en cada div, además introducimos atributos de clase, en los div y en los botones, que seran usados más adelante.
for (const i of divs) {
  const button = document.createElement('button')
  button.innerText = 'Pulse para borrar '
  let clasname = 'button'
  i.classList.add(counter)
  //console.log('clasname vale:', clasname)
  //console.log('las clases de los div son:', i)
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
    //console.log('la longitud de la clase button es:', idboton.length)
    numberOfDivRemove = idboton.slice(idboton.length - 1)
    console.log('numberOfDivRemove vale:', numberOfDivRemove) // OK
    //divremove = document.querySelectorAll('.numberOfDivRemove') // No selecciona bien el elemento.
    let parent = boton.parentNode
    console.log('El padre es:', parent)

    //divremove = document.querySelectorAll('div')[numberOfDivRemove - 1] // OK
    //* el fallo está en la línea de abajo.
    //divremove = document.querySelector('div')
    console.log('El div que hay que borrar es:', parent)
    parent.remove()

    //console.log(typeof idboton)
    //console.log('El evento es:', event)
    //const divremove = document.get
    //console.log('el botón que hay que borrar es:', buttonremove)
    //console.log('div remove vale:', divremove)
    //divremove.remove()
  })
})
/*while (numberOfDivRemove > 0 && numberOfDivRemove < numberAux) {
  divremove = document.querySelectorAll('div')[numberOfDivRemove - 1]
  console.log('que ocurre aquí')
  // divremove.remove()
}*/

/*while (numberOfDivRemove > 0 || numberOfDivRemove < divs.length) {
  console.log('que ocurre aquí')
  divremove.remove()
}*/
/*button.addEventListener('click', (ev) => {
  console.log('ev vale:', ev)
  console.log('el botón pulsado es: ', ev.target.id)
  const bottomB = document.querySelector('div')
  console.log('bottomB vale:', bottomB)
  bottomB.remove()
})*/
