const age = 17
let yearsLeft = 18 - age

if (age >= 18) {
    console.log(`You can drive 🚗`)
} else {
    if (yearsLeft == 1) {
        console.log(`You can't drive, wait ${yearsLeft} year`)
    } else {
        console.log(`You can't drive, wait ${yearsLeft} years`)
    }
}