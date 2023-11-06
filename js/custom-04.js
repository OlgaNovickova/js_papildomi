/* 01.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/

console.log('')
console.log('custom-04, 1 uzduotis')

let augalai = ['sedula', 'pūslenis', 'pušis', 'lanksva', 'ligustras', 'kaulenis', 'eglė', 'gudobelė', 'raugerškis', 'liepa']

console.log(augalai)

/* 02.
Atspausdinkite kiekvieną pirmo uždavinio augalą atskiroje eilutėje.
*/

console.log('')
console.log('custom-04, 2 uzduotis')

//pirmas variantas
console.log('variantas 1')

for (let augalas of augalai) {
  console.log(augalas)
}

console.log('')

//antras variantas
console.log('variantas 2')

for (let i = 0; i < augalai.length; i++) {
  console.log(augalai[i])
}

/* 03.
Atspausdinkite pirmo uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/

console.log('')
console.log('custom-04, 3 uzduotis')

//pirmas variantas
console.log('variantas 1')
augalai.reverse()
console.log(augalai)

console.log('')
console.log('variantas 2')

for(let i = augalai.length - 1; i >= 0; i--) {
  console.log(augalai[i])
}

/* 04.
Suskaičiuokite kiek pirmo uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/

console.log('')
console.log('custom-04, 4 uzduotis')
let trumpas = 0
let ilgas = 0
for (let i = 0; i < augalai.length; i++) {
  if(augalai[i].length > 7) {
    ilgas++
  } else if (augalai[i].length < 5){
    trumpas++
  }
}
console.log(augalai)
console.log(`Trumpi: ${trumpas}, ilgi: ${ilgas}`)














