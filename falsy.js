// true false
// true -> truthy
// false -> falsy

//falsies -> Valores que evaluan a falso
const cadenaVacia = ''
const cero = 0
const valorNulo = null
const valorIndefinido = undefined
const notANumber = NaN

console.log('-----truthy-----')
console.log('cadenaVacia:', !!cadenaVacia)
console.log('cero:', !!cero)
console.log('valorNulo:', !!valorNulo)
console.log('valorIndefinido:', !!valorIndefinido)


// truthy -> 
const cadenaConTexto = 'hola'
const cualquierNumero = 5
const objetoVacio = {}
const arrayVacio = []

console.log('-----falsy-----')
console.log('cadenaConTexto:', !!cadenaConTexto)
console.log('cualquierNumero:', !!cualquierNumero)
console.log('objetoVacio:', !!objetoVacio)
console.log('arrayVacio:', !!arrayVacio)