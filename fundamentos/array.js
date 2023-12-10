
//Elementos de uma array
const valores = [7.7, 8.9, 9.2, 6.3]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

//Adiciona elementos a uma array
valores.push({id: 3},false,null,'teste')
console.log(valores)

//Retira elementos de uma array
console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)
