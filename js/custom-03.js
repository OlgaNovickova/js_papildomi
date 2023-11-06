/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/

console.log('')
console.log('custom-03, 1 uzduotis')

for (i=0; i < 10; i++) {
	console.log('labas')
	
}


/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/

console.log('')
console.log('custom-03, 2 uzduotis')
for (let i = 0; i <= 9; i++) {
	console.log(i)
}


/* 03.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/

console.log('')
console.log('custom-03, 3 uzduotis')

//pirmas variantas
for (let i = 10; i <= 50; i+=2) {
  console.log(i)
}

//antras variantas 
for(let i = 10; i <= 50; i++) {
  if(i % 2 === 0) {
      console.log(i)
    }
  }


/* 04.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/

console.log('')
console.log('custom-03, 4 uzduotis')

  for(let i = 10; i <= 50; i++) {
    if(i % 2 === 0) {
      if(i % 10 === 0) {
        continue
      } else {
        console.log(i)
      }
    }
  }
  


/* 05.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/

console.log('')
console.log('custom-03, 5 uzduotis')

let lyginisKiekis = 0;

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    lyginisKiekis++
  }
}

console.log(lyginisKiekis)

/* SUNKESNI */

console.log('')
console.log('sunkesni')
/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/

console.log('')
console.log('custom-03, 1 uzduotis')

//pirmas variantas

console.log('1 variantas')

let Str = '';
let daugiauNei150 = 0;

for(let i = 0; i <= 300; i++) {
  let AtsSk = Math.floor(Math.random() * 300);
  if (AtsSk > 150) {
    daugiauNei150++;
  }
  if (AtsSk > 275) {
    Str += `[${AtsSk}] `;
    continue;
  }
  Str += `${AtsSk} `;
}

console.log(Str);
console.log(`Daugiau kaip 150: ${daugiauNei150}`)


//antras variantas
console.log('')
console.log('2 variantas')

let arr = ''
num = 0
let counter = 0
for (let i = 0; i < 300; i++) {
	num = Math.round(Math.random() * 300)
	if (num > 150) {
		counter++
	}
	if (num > 275) {
		arr += '[' + num + ']' + ' '
	} else {
		arr += num + ' '
	}
}
console.log(`Didesni nei 150: ${counter}`)
console.log(arr)


/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/

console.log('')
console.log('custom-03, 2 uzduotis')

//pirmas variantas
console.log('variantas 1')

let str = '';
for (let i = 1; i <= 3000; i++) {
  if (i == Math.floor(3000 / 77) * 77) {
    str += `${i}`;
  } else if (i % 77 == 0) {
    str += `${i}, `
  }
}

console.log(str)

console.log('')
console.log('variantas 2')

let Skaicius = []
for(let i = 77; i <= 3000; i +=77) {
  Skaicius.push(i)
}

let masyvas = Skaicius.join(', ')
console.log(masyvas)

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/


console.log('')
console.log('custom-03, 3 uzduotis')

//pirmas variantas
console.log('variantas 1')

console.log(
	'* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *'
)

console.log('')
console.log('variantas 2')

let n = 10
let string = ''
for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {
    string += '*'
  }
  string += '\n'
}

console.log(string)


