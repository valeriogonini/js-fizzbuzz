//console.log("ciao a tutti");
//Scrivi un programma che stampi in console i numeri da 1 a 100
let n = 100;
for (let i = 0; i < n; ++i ) {
let num = i + 1;
console.log(num);
//per i multipli di 3 stampi “Fizz” al posto del numero
let Multiplo3 = num % 3
let Multiplo5 = num % 5
let Multiplo3e5 = num % 3 % 5
if (Multiplo3 === 0){
    //let Multiplo3Element = Multiplo3 * 3
    //console.log("Fizz", Multiplo3Element)

} if(Multiplo5 === 0) {
//per i multipli di 5 stampi “Buzz” al post del numero.
//let Multiplo5Element = Multiplo5 * 5

//console.log("Buzz", Multiplo5Element);
} if (Multiplo3e5 === 0) {
    console.log("FizzBuzz");
}



}

//Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.