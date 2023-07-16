let num1 = 4
let num2 = 6

if(num1 > num2) {
    console.log(`${num1} e' piu' grande di ${num2}`)
} else {
  console.log(`${num2} e' piu' grande di ${num1}`)
}


const num = 17

if (num < 5) {
    console.log("Tiny")
} else if (num < 10) {
    console.log("Small")
} else if (num < 15) {
    console.log("Medium")
} else if (num < 20) {
    console.log("Large")
} else if (num >= 20) {
    console.log("Huge")
}


for (let i=0; i <= 10; i++) {


if(i===3) {
    continue
}
if(i===8) {
    continue
}
console.log(i) 
}

for (let i=0; i<=15; i++) {
    if (i % 2 === 0) {
        console.log(i, "Pari")
    }
    else {
        console.log(i, "Dispari")
    }
}

