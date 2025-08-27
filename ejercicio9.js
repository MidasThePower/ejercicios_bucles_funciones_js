/*
Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo.
Utiliza este array para probar tu función.
*/

const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
]

function findOldestXMen(xMen) {
  let oldestXMan = xMen[0]
  for (let i = 1; i < xMen.length; i++) {
    if (xMen[i].year < oldestXMan.year) {
      oldestXMan = xMen[i]
    }
  }
  return oldestXMan
}

const oldestXMan = findOldestXMen(xMen)
console.log(
  `The oldest X-Men member is: ${oldestXMan.name}, appeared in ${oldestXMan.year}`
)
