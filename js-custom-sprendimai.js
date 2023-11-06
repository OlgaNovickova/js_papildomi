// Custom 01
// 1
let vardas = 'Dainius'
let pavarde = 'Tomauskas'
let gimimoMetai = 1996
let metai = new Date().getFullYear()

console.log(`As esu ${vardas} ${pavarde}. Man yra ${metai - gimimoMetai} metai (-u).`)

// 2
let x = Math.round(Math.random() * 4)
let y = Math.round(Math.random() * 4)

console.log(`Skaiciai: ${x}, ${y}`)

if(x === 0 || y === 0) {
    console.log('Dalyba is nulio negalima')
} else if (x > y) {
    console.log((x/y).toFixed(2))
} else {
    console.log((y/x).toFixed(2))
}

// 3
let num1 = Math.round(Math.random() * 25)
let num2 = Math.round(Math.random() * 25)
let num3 = Math.round(Math.random() * 25)

console.log(`Skaiciai: ${num1}, ${num2}, ${num3}`)

let largest = Math.max(num1, num2, num3)
let smallest = Math.min(num1, num2, num3)
let middleNum

if(num1 != largest && num1 != smallest) {
    middleNum = num1
} else if (num2 != largest && num2 != smallest) {
    middleNum = num2
} else if (num3 != largest && num3 != smallest) {
    middleNum = num3
} else {
    middleNum = 'undetermined as 2 or more number are equal'
}

console.log(`The middle number is ${middleNum}`)

// 4
let kr1 = Math.ceil(Math.random() * 10)
let kr2 = Math.ceil(Math.random() * 10)
let kr3 = Math.ceil(Math.random() * 10)

console.log(`Skaiciai: ${kr1}, ${kr2}, ${kr3}`)

if(kr1 + kr2 > kr3 && kr1 + kr3 > kr2 && kr2 + kr3 > kr1) {
    console.log('Taip, trikampis imanomas')
} else {
    console.log('Ne, trikampis neimanomas')
}

// 5
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

if(sk1 === 1) {
    vienas++
}

if(sk1 === 2) {
    du++
}

if (sk2 === 0) {
    nulis++
}

if(sk2 === 1) {
    vienas++
}

if(sk2 === 2) {
    du++
}

if (sk3 === 0) {
    nulis++
}

if(sk3 === 1) {
    vienas++
}

if(sk3 === 2) {
    du++
}

if (sk4 === 0) {
    nulis++
}

if(sk4 === 1) {
    vienas++
}

if(sk4 === 2) {
    du++
}

console.log(`Nuliai: ${nulis}, Vienetai: ${vienas}, Dvejetai: ${du}`)

// 6
let skl1 = Math.floor(Math.random() * 21) - 10
let skl2 = Math.floor(Math.random() * 21) - 10
let skl3 = Math.floor(Math.random() * 21) - 10

console.log(`Skaiciai: ${skl1}, ${skl2}, ${skl3}`)

if(skl1 < 0) {
    console.log(`[${skl1}]`)
}

if(skl1 === 0) {
    console.log(`(${skl1})`)
}

if(skl1 > 0) {
    console.log(`{${skl1}}`)
}

if(skl2 < 0) {
    console.log(`[${skl2}]`)
}

if(skl2 === 0) {
    console.log(`(${skl2})`)
}

if(skl2 > 0) {
    console.log(`{${skl2}}`)
}

if(skl3 < 0) {
    console.log(`[${skl3}]`)
}

if(skl3 === 0) {
    console.log(`(${skl3})`)
}

if(skl3 > 0) {
    console.log(`{${skl3}}`)
}

// 7

let kiekis = Math.floor(Math.random() * (3000 - 5 + 1) + 5)
let kaina = 1

if(kiekis > 2000) {
    kaina = (kaina * kiekis * 0.96).toFixed(2)
} else if (kiekis > 1000) {
    kaina = (kaina * kiekis * 0.97).toFixed(2)
} else {
    kaina = kiekis.toFixed(2)
}

console.log(`Kiekis: ${kiekis}, Suma: ${kaina} EUR.`)

// 8
let kin1 = Math.round(Math.random() * 100)
let kin2 = Math.round(Math.random() * 100)
let kin3 = Math.round(Math.random() * 100)
let count = 3

let vidurkis = Math.round((kin1 + kin2 +kin3) / count)
console.log(`Skaiciai: ${kin1}, ${kin2}, ${kin3}`)
console.log(`Vidurkis: ${vidurkis}`)

if(kin1 < 10 || kin1 > 90) {
    count--
    kin1 = 0
}

if(kin2 < 10 || kin2 > 90) {
    count--
    kin2 = 0
}

if(kin3 < 10 || kin3 > 90) {
    count--
    kin3 = 0
}

if(kin1 === 0 && kin2 === 0 && kin3 === 0) {
    console.log('Visi trys skaiciai lygus nuliui, negalime skaicuoti vidurkio')
} else {
    vidurkis = Math.round((kin1 + kin2 +kin3) / count)
    console.log(`Atmetus nepriimtinus skaicius, vidurkis: ${vidurkis}`)
}

// 9
let totalSeconds = Math.round(Math.random() * 86400) 
let hours = Math.floor(totalSeconds / 3600)
let mins = Math.floor((totalSeconds % 3600) / 60)
let secs = totalSeconds % 60

// if(hours < 10) {
//     hours = hours.toString().padStart(2,'0')
// }

// if(mins < 10) {
//     mins = mins.toString().padStart(2,'0')
// }

// if(secs < 10) {
//     secs = secs.toString().padStart(2,'0')
// }

let formatTime = (h, m, s) => `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`

console.log(`Pries: ${formatTime(hours, mins, secs)}`)

let addSeconds = Math.round(Math.random() * 300)
console.log(`Prideta sekundziu: ${addSeconds}`)

totalSeconds += addSeconds
hours = Math.floor(totalSeconds / 3600)
mins = Math.floor((totalSeconds % 3600) / 60)
secs = totalSeconds % 60

console.log(`Po: ${formatTime(hours, mins, secs)}`)

// 10
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

if(first === kint2 || last === kint2) {
    kint2 = 0
}

if(first === kint3 || last === kint3) {
    kint3 = 0
}

if(first === kint4 || last === kint4) {
    kint4 = 0
}

if(first === kint5 || last === kint5) {
    kint5 = 0
}

if(first === kint6 || last === kint6) {
    kint6 = 0
}

let second = Math.max(kint1, kint2, kint3, kint4, kint5, kint6)

if(second === kint1) {
    kint1 = 0
} else if (second=== kint2) {
    kint2 = 0
} else if (second=== kint3) {
    kint3 = 0
} else if (second=== kint4) {
    kint4 = 0
} else if (second=== kint5) {
    kint5 = 0
} else if (second=== kint6) {
    kint6 = 0
}

let third = Math.max(kint1, kint2, kint3, kint4, kint5, kint6)

if(third === kint1) {
    kint1 = 0
} else if (third=== kint2) {
    kint2 = 0
} else if (third=== kint3) {
    kint3 = 0
} else if (third=== kint4) {
    kint4 = 0
} else if (third=== kint5) {
    kint5 = 0
} else if (third=== kint6) {
    kint6 = 0
}

let fourth = Math.max(kint1, kint2, kint3, kint4, kint5, kint6)

if(fourth === kint1) {
    kint1 = 0
} else if (fourth=== kint2) {
    kint2 = 0
} else if (fourth=== kint3) {
    kint3 = 0
} else if (fourth=== kint4) {
    kint4 = 0
} else if (fourth=== kint5) {
    kint5 = 0
} else if (fourth=== kint6) {
    kint6 = 0
}

let fifth = Math.max(kint1, kint2, kint3, kint4, kint5, kint6)

if(fifth === kint1) {
    kint1 = 0
} else if (fifth=== kint2) {
    kint2 = 0
} else if (fifth=== kint3) {
    kint3 = 0
} else if (fifth=== kint4) {
    kint4 = 0
} else if (fifth=== kint5) {
    kint5 = 0
} else if (fifth=== kint6) {
    kint6 = 0
}

console.log(`${first} ${second} ${third} ${fourth} ${fifth} ${last}`)

// Custom 02
// 1
let i = 10
while (i > 0) {
    console.log(i)
    i--
}

// 2
for(let i = 10; i > 0; i--) {
    console.log(i)
}

// 3
let numAvys = 4
let numMenuo = 1
let kiekMenSpausdinti = 12

while(numMenuo <= kiekMenSpausdinti) {
    numAvys *= 4
    console.log(`Po ${numMenuo} mėnesio(-ių) bus ${numAvys} avių!`)
    numMenuo++
}

// 4
numAvys = 4
numMenuo = 1
kiekMenSpausdinti = 12

for(; numMenuo <= kiekMenSpausdinti; numMenuo++) {
    numAvys *= 4
    console.log(`Po ${numMenuo} mėnesio(-ių) bus ${numAvys} avių!`)
}

// 5
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

// 6
totalGen = 19
totalMW = 0

for(let i = 1; i <= totalGen; i++) {
    if(i % 2 === 0) {
        if(i < 5) {
            totalMW += 62
            console.log(`Generatorius #${currentGen} ijungtas, pridejo 62 MW, viso generuojama ${totalMW} MW!`)
        } else {
            totalMW += 124
            console.log(`Generatorius #${currentGen} ijungtas, pridejo 124 MW, viso generuojama ${totalMW} MW!`)
        }
    } else {
        console.log(`Generatorius #${i} isjungtas.`)
    }
}

// 7
let num=10;
while (num > 0) {
    if(num % 2 === 0) {
        console.log(num);
    }
    num--;
}

// 8
function maxOf2(a,b) {
    if(a >= b) {
        console.log(a)
    } else {
        console.log(b)
    }
}
maxOf2(13,7)

// Custom 03
// 1
for(let i = 0; i < 10; i++) {
    console.log("Labas")
}

// 2
for(let i = 0; i < 10; i++) {
    console.log(i)
}

// 3
for(let i = 10; i <= 50; i++) {
    if(i % 2 === 0) {
        console.log(i)
    }
}

// 4 
for(let i = 10; i <= 50; i++) {
    if(i % 2 === 0) {
        if(i % 10 === 0) {
            continue
        } else {
            console.log(i)
        }
    }
}

// 5
let evenNum = 0
for(let i = 0; i <= 20; i++) {
    if(i % 2 === 0) {
        evenNum++
    }
}
console.log(evenNum)

// 6
let arr = ''
num = 0
let counter = 0
for(let i = 0; i < 300; i++) {
    num = Math.round(Math.random() * 300)
    if(num > 150) {
        counter++
    }
    if(num > 275) {
        arr += '[' + num + ']' + ' '
    } else {
        arr += num + ' '
    }
}
console.log(`Didesni nei 150: ${counter}`)
console.log(arr)

// 7
let crazyNum = []
for(let i = 77; i <= 3000; i+=77) {
    crazyNum.push(i)
}

let masyvas = crazyNum.join(', ')
console.log(masyvas)

// 8
let n = 10
let string = ''
for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        string += '*'
    }
    string += "\n"
}
console.log(string)

// Custom 04
// 1
let augalai = ['Alyva', 'Begonija', 'Tuja', 'Liepa', 'Raugerškis', 'Gudobelė', 'Eglė', 'Kaulenis', 'Sedula', 'Ligustras']

// 2
for(let i = 0; i < augalai.length; i++) {
    console.log(augalai[i])
}

// 3 
for(let i = augalai.length - 1; i >= 0; i--) {
    console.log(augalai[i])
}

// 4
let trumpas = 0
let ilgas = 0
for(let i = 0; i < augalai.length; i++) {
    if(augalai[i].length > 7) {
        ilgas++
    } else if (augalai[i].length < 5){
            trumpas++
    }
}
console.log(augalai)
console.log(`Trumpi: ${trumpas}, ilgi: ${ilgas}`)

