/*1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
1.3 Usa querySelector para mostrar por consola todos los p
1.4 Usa querySelector para mostrar por consola todos los elementos con 
	la clase.pokemon
1.5 Usa querySelector para mostrar por consola todos los elementos con 
el atributo data-function="testMe".
1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".
*/
//? Soluciones:
// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const button = document.querySelector('.showme')
console.log('button contiene:', button)
//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const titleh1 = document.querySelector('#pillado')
console.log('h1 contiene:', titleh1)
// 1.3 Usa querySelector para mostrar por consola todos los p
const parrafos = document.querySelectorAll('p')

console.log('los párrafos del DOM son:', parrafos)
// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemon = document.querySelectorAll('.pokemon')
console.log('La lista de pokemon es:', pokemon)
// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const testMe = document.querySelectorAll('[data-function="testMe"]')
console.log('El listado data-function es:', testMe)
// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
//? primera variante
console.log('El tercer elemento del listado data-function es:', testMe[2])
//? segunda variante
thirdElement = document.querySelectorAll('[data-function]')[2]
console.log('El tercer elemento del listado data-function es:', thirdElement)
