/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/

console.log('custom-01, 1 uzduotis')

let vardas = 'Olga'
let pavarde = 'Novičkova'
let gimimoMetai = 1982
let dabartiniaiMetai = new Date().getFullYear()


console.log('Aš esu ', vardas, pavarde,'. Man yra ', dabartiniaiMetai - gimimoMetai, 'metai.')



/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

console.log('')
console.log('custom-01, 2 uzduotis')

let a = Math.round(Math.random() * 4) 
let b = Math.round(Math.random() * 4) 


console.log(`Skaiciai: ${a}, ${b}`)


if (a === 0 || b === 0) {
	console.log('Dalyba iš nulio nėra galima')
} else if (a > b) {
  console.log((a/b).toFixed(2))
} else {
  console.log((b/a).toFixed(2))
} 


/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintamąjį turintį vidurinę reikšmę.
*/

console.log('')
console.log('custom-01, 3 uzduotis')

/* 1 variantas */
console.log('pirmas variantas')

let d = Math.floor(Math.random() * 25) 
let e = Math.floor(Math.random() * 25)
let f = Math.floor(Math.random() * 25)

console.log(`Pirmas kintamasis: ${d}, antras kintamasis: ${e}, trečias kintamasis: ${f}`)


if ((e<d && d<f) || (f<d && d<e)) {
console.log('Vidurinę reikšmę turi pirmas kintamasis:', d)
} else if ((d<e && e<f) || (f<e && e<d)) {
  console.log('Vidurinę reikšmę turi antras kintamasis:',e)
} else if ((d<f && f<e) || (e<f && f<d)) {
console.log('Vidurinę reikšmę turi trečias kintamasis:', f)
}

/* 2 variantas */
console.log('')
console.log('antras variantas')

let Num1 = Math.round(Math.random() * 25) 
let Num2 = Math.round(Math.random() * 25)
let Num3 = Math.floor(Math.random() * 25)

console.log(`Skaiciai: ${Num1}, ${Num2}, ${Num3}`)


let largest = Math.max(Num1, Num2, Num3)
let smallest = Math.min(Num1, Num2, Num3)
let middleNum 

if (Num1 != largest && Num1 != smallest) {
	middleNum = Num1
} else if (Num2 != largest && Num2 != smallest) {
	middleNum = Num2
} else if (Num3 != largest && Num3 != smallest) {
	middleNum = Num3
} else {
	middleNum = 'undetermined as 2 or more numbers are equal'
}

console.log(`The middle number is ${middleNum}`)

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/

console.log('')
console.log('custom-01, 4 uzduotis')

let kr1 = Math.ceil(Math.random() * 10)
let kr2 = Math.ceil(Math.random() * 10)
let kr3 = Math.ceil(Math.random() * 10)

console.log(`Skaiciai: ${kr1}, ${kr2}, ${kr3}`)

if (kr1+kr2>kr3 && kr1+kr3>kr2 && kr2+kr3>kr1) {
  console.log('trikampį galima sudaryti')
} else {
  console.log('trikampio sudaryti negalima')
}

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/

console.log('')
console.log('custom-01, 5 uzduotis')

let sk1 = Math.round(Math.random() * 2) 
let sk2 = Math.round(Math.random() * 2) 
let sk3 = Math.round(Math.random() * 2) 
let sk4 = Math.round(Math.random() * 2) 


console.log(`Skaiciai: ${sk1}, ${sk2}, ${sk3}, ${sk4}`)

let nulis = 0
let vienas = 0
let du = 0

if (sk1 === 0) {
	nulis++
}

if (sk1 === 1) {
	vienas++
}

if (sk1 === 2) {
	du++
}

if (sk2 === 0) {
	nulis++
}

if (sk2 === 1) {
	vienas++
}

if (sk2 === 2) {
	du++
}

if (sk3 === 0) {
	nulis++
}

if (sk3 === 1) {
	vienas++
}

if (sk3 === 2) {
	du++
}

if (sk4 === 0) {
	nulis++
}

if (sk4 === 1) {
	vienas++
}

if (sk4 === 2) {
	du++
}

console.log(`Nuliai: ${nulis}, vienetai: ${vienas}, dvejetai: ${du}`)


/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/

console.log('')
console.log('custom-01, 6 uzduotis')

let skl1 = Math.floor(Math.random() * 21) - 10
let skl2 = Math.floor(Math.random() * 21) - 10
let skl3 = Math.floor(Math.random() * 21) - 10

console.log(`Skaiciai: ${skl1}, ${skl2}, ${skl3}`)

console.log('pirmas variantas')

// 1 variantas

if (skl1 < 0) {
  console.log(`[${skl1}]`)
} else if (skl1 == 0) {
    console.log(`(${skl1})`)
} else if (skl1 > 0) {
    console.log(`{${skl1}}`)
} else {
	console.log('neatitinka sąlygoms')
}


if (skl2 < 0) {
	console.log(`[${skl2}]`)
} else if ((skl2 == 0)) {
	console.log(`(${skl2})`)
} else if (skl2 > 0) {
	console.log(`{${skl2}}`)
}	else {
		console.log('neatitinka sąlygoms')
} 
  

if (skl3 < 0) {
	console.log(`[${skl3}]`)
} else if ((skl3 == 0)) {
	console.log(`(${skl3})`)
} else if (skl3 > 0) {
	console.log(`{${skl3}}`)
}	else {
		console.log('neatitinka sąlygoms')
} 

console.log('antras variantas')

//2 variantas

if (skl1 < 0) {
	console.log(`[${skl1}]`)
} 
if (skl1 === 0) {
	console.log(`(${skl1})`)
} 
if (skl1 > 0) {
	console.log(`{${skl1}}`)
}

if (skl2 < 0) {
	console.log(`[${skl2}]`)
} 
if (skl2 === 0) {
	console.log(`(${skl2})`)
} 
if (skl2 > 0) {
	console.log(`{${skl2}}`)
} 
	

if (skl3 < 0) {
	console.log(`[${skl3}]`)
} 

if (skl3 === 0) {
	console.log(`(${skl3})`)
} 

if (skl3 > 0) {
	console.log(`{${skl3}}`)
} 


/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/

console.log('')
console.log('7 uzduotis')

let kiekis = Math.floor(Math.random() * (3000 - 5 + 1) + 5)
let kaina = 1

if(kiekis > 2000) {
	kaina = (kaina * kiekis * 0.96).toFixed(2)
} else if(kiekis > 1000) {
	kaina = (kaina * kiekis * 0.97).toFixed(2)
}  else {
	kaina=kiekis.toFixed(2)
}

console.log(`Kiekis: ${kiekis}, Suma:${kaina} Eur`)

/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/

console.log('')
console.log('custom-01, 8 uzduotis')

let kin1 = Math.round(Math.random() * 100)
let kin2 = Math.round(Math.random() * 100)
let kin3 = Math.round(Math.random() * 100)
let count = 3

let Vidurkis = Math.round((kin1 + kin2 + kin3) / count)
console.log(`Skaiciai: ${kin1}, ${kin2}, ${kin3}`)
console.log(`Vidurkis: ${Vidurkis}`)

if(kin1 < 10 || kin1 > 90) {
	count --
	kin1 = 0
}

if (kin2 < 10 || kin2 > 90) {
	count--
	kin2 = 0
}

if (kin3 < 10 || kin3 > 90) {
	count--
	kin3 = 0
}

if(kin1 === 0 && kin2 === 0 && kin3 === 0) {
	console.log('Visi trys skaiciai lygus nuliui, negalime skaiciuoti vidurkio')
} else {
	Vidurkis = Math.round((kin1 + kin2 + kin3) / count)
	console.log(`Atmetus nepriimtinus skaicius, vidurkis: ${Vidurkis}`)
}

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/

console.log('')
console.log('9 uzduotis')

let  totalSeconds = Math.round(Math.random() * 86400) 
let hours = Math.floor(totalSeconds / 3600)
let mins = Math.floor((totalSeconds % 3600) / 60)
let secs = totalSeconds % 60

/*if(hours < 10) {
	hours = hours.toString().padStart(2,'0')
}

if (mins < 10) {
	mins = mins.toString().padStart(2, '0')
}

if (secs < 10) {
	secs = secs.toString().padStart(2, '0')
}*/

let formatTime = (h, m, s) =>
	`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s
		.toString().padStart(2, '0')}`

		console.log(`Pries: ${formatTime(hours, mins, secs)}`)

	let addSeconds = Math.round(Math.random() * 300)
	console.log(`Prideta sekundziu: ${addSeconds}`)

	totalSeconds += addSeconds
	hours = Math.floor(totalSeconds / 3600)
	mins = Math.floor((totalSeconds % 3600) / 60)
	secs = totalSeconds % 60

	console.log(`Po: ${formatTime(hours, mins, secs)}`)

/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

console.log('')
console.log('10 uzduotis')

let kint1 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
let kint2 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
let kint3 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
let kint4 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
let kint5 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
let kint6 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)

let first = Math.max(kint1, kint2, kint3, kint4, kint5, kint6)
let last = Math.min(kint1, kint2, kint3, kint4, kint5, kint6)

if(first === kint1 || last === kint1) {
	kint1 = 0
}

if (first === kint2 || last === kint2) {
	kint2 = 0
}

if (first === kint3 || last === kint3) {
	kint3 = 0
}

if (first === kint4 || last === kint4) {
	kint4 = 0
}

if (first === kint5 || last === kint5) {
	kint5 = 0
}

if (first === kint6 || last === kint6) {
	kint6 = 0
}

let second = Math.max(kint1, kint2, kint3, kint4, kint5, kint6)

if (second === kint1) {
	kint1 = 0
} else if (second === kint2) {
	kint2 = 0
} else if (second === kint3) {
	kint3 = 0
} else if (second === kint4) {
	kint4 = 0
} else if (second === kint5) {
	kint5 = 0
} else if (second === kint6) {
	kint6 = 0
}

let third = Math.max(kint1, kint2, kint3, kint4, 
kint5, kint6)

if (third === kint1) {
	kint1 = 0
} else if (second === kint2) {
	kint2 = 0
} else if (second === kint3) {
	kint3 = 0
} else if (second === kint4) {
	kint4 = 0
} else if (second === kint5) {
	kint5 = 0
} else if (second === kint6) {
	kint6 = 0
}

let fourth = Math.max(kint1, kint2, kint3, kint4, 
kint5, kint6)

if (fourth === kint1) {
	kint1 = 0
} else if (second === kint2) {
	kint2 = 0
} else if (second === kint3) {
	kint3 = 0
} else if (second === kint4) {
	kint4 = 0
} else if (second === kint5) {
	kint5 = 0
} else if (second === kint6) {
	kint6 = 0
}

let fifth = Math.max(kint1, kint2, kint3, kint4, 
kint5, kint6)

if (fifth === kint1) {
	kint1 = 0
} else if (second === kint2) {
	kint2 = 0
} else if (second === kint3) {
	kint3 = 0
} else if (second === kint4) {
	kint4 = 0
} else if (second === kint5) {
	kint5 = 0
} else if (second === kint6) {
	kint6 = 0
}

console.log(`${first} ${second} ${third} ${fourth} ${fifth} ${last}`)
















