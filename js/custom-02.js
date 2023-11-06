/* 
Užduotis 1
Naudodami while loop, konsolėje parašykite nuo 10 iki 1. 
*/

console.log('')
console.log('custom-02, 1 uzduotis')

let skaicius = 10;

while (skaicius >= 1) {
  console.log(skaicius);
  skaicius--;
}


/* 
Užduotis 2
Naudodami for loop, konsolėje parašykite nuo 10 iki 1.
*/

console.log('')
console.log('custom-02, 2 uzduotis')

for (let Skaicius = 10; Skaicius >= 1; Skaicius-- ) {
  console.log(Skaicius)
}


/*
Užduotis 3
Per mėnesį avių skaičius išauga 4 kartais. Naudodami while loop ir tris nurodytus kintamuosius, išveskite avių skaičių 12 mėnesių.

let numAvys = 4;
let numMenuo = 1;
let kiekMenSpausdinti = 12;

Štai kaip atrodys pirmos dvi eilutės:

Po 1 mėnesio(-ių) bus 16 avių!
Po 2 mėnesio(-ių) bus 64 avių!
*/

console.log('')
console.log('custom-02, 3 uzduotis')

let numAvys = 4
let numMenuo = 1
let kiekMenSpausdinti = 12

while(numMenuo <= kiekMenSpausdinti) {
  numAvys *= 4
  console.log(`Po ${numMenuo} mėnesio(-ių) bus ${numAvys} avių!`)
  numMenuo++
}


/*
Užduotis 4
Atlikite užduotį JS 03 su for loop
*/

console.log('')
console.log('custom-02, 4 uzduotis')

numAvys = 4
numMenuo = 1
kiekMenSpausdinti = 12

for(; numMenuo <= kiekMenSpausdinti; numMenuo++) {
  numAvys *= 4
  console.log(`Po ${numMenuo} mėnesio(-ių) bus ${numAvys} avių!`)
}

/*
Užduotis 5
Hidroeleketrinėje yra 19 generatorių. Pirmi 4 gamina po 62 MW, likusieji 15 - po 124 MW. Inžinieriai paprašė tavęs sukurti du ciklus (loops), kurie vienas po kito įjungia visus 19 generatorių ir atspausdina generuojamų MW skaičių. Pirmiems 4 generatoriams panaudok while loop, likusiems 15 - for loop. Kiekviena spausdinama eilutė turėtų atrodyti taip (koreguojant currentGen ir totalMW):

Generatorius #1 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 124 MW!

Naudokis tokiais kintamaisiais:
let currentGen = 1;
let totalGen = 19;
let totalMW = 0;
*/

console.log('')
console.log('custom-02, 5 uzduotis')

let currentGen = 1
let totalGen = 19
let totalMW = 0

for(currentGen; currentGen <= totalGen; currentGen++) {
  while(currentGen < 5) {
    totalMW += 62
    console.log(`Generatorius #${currentGen} ijungtas, pridejo 62 MW, viso generuojama ${totalMW} MW!`)
    currentGen++
  }
  totalMW += 124
  console.log(`Generatorius #${currentGen} ijungtas, pridejo 124 MW, viso generuojama ${totalMW} MW!`)
	
}


/*
Užduotis 6
Keli pakeitimai JS 05 užduočiai. Veikia tik lyginiai generatoriai. Panaudok tik vieną for loop. Nepamiršk, kad pirmi 4 generatoriai gamina po 62 MW, o likusieji 15 - po 124 MW.

Konsolės formatas:

Generatorius #1 išjungtas.
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!

Naudojami kintamieji:
let totalGen = 19;
let totalMW = 0;
*/

console.log('')
console.log('custom-02, 6 uzduotis')

totalGen = 19
totalMW = 0

for(let i = 1; i <= totalGen; i++) {
    if(i % 2 === 0) {
        if(i < 5) {
            totalMW += 62
            console.log(`Generatorius #${currentGen} ijungtas,pridejo 62 MW, viso generuojama ${totalMW} MW!`)
        } else {
            totalMW += 124
            console.log(`Generatorius #${currentGen} ijungtas,pridejo 124 MW, viso generuojama ${totalMW} MW!`)
        }
    } else {
        console.log(`Generatorius #${i} isjungtas.`)
    }
}

/*
Užduotis 7
Papildyk while loop taip, kad tik lyginiai skaičiai būtų spausdinami. Tavo rezultatas turėtų būti lyginiai skaičiai nuo 10 iki 2 žemėjančia tvarka.

let num=10;
while (num > 0) {

console.log(num);

num--;
}
*/

console.log('')
console.log('custom-02, 7 uzduotis')

let num = 10

while (num > 0) {
  if(num % 2 === 0)
	console.log(num)
	num--
}


/*
Užduotis 8
Sukurk funkciją maxOf2, kuri priima du skaičius ir gražina didesnį skaičių. Nepamiršk galimybės, kad skaičiai bus lygūs. Tuo atveju gražink vieną iš skaičių.
*/

console.log('')
console.log('custom-02, 8 uzduotis')

function maxOf2(a,b) {
  if(a >= b) {
    console.log(a)
  } else {
    console.log(b)
  }
}

maxOf2(13,7)