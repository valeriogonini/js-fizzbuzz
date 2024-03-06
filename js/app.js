//console.log("ciao a tutti");
//Scrivi un programma che stampi in console i numeri da 1 a 100
let n = 100;
const mainElement = document.querySelector(".scacchi")

for (let i = 0; i < n; ++i) {
    let num = i + 1;


    //;
    let Multiplo3 = num % 3
    let Multiplo5 = num % 5
    
    //Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
    if (Multiplo3 === 0 && Multiplo5 === 0) {
        console.log("FizzBuzz");
        mainElement.innerHTML += `<div class="fizzbuzz">${'fizzbuzz'}</div>`


    } else if (Multiplo3 === 0) {
        //per i multipli di 3 stampi “Fizz” al posto del numero


        console.log("Fizz",);
        mainElement.innerHTML += `<div class="fizz">${'fizz'}</div>`
    } else if (Multiplo5 === 0) {
        //per i multipli di 5 stampi “Buzz” al post del numero.


        console.log("Buzz");
        mainElement.innerHTML += `<div class="buzz">${'buzz'}</div>`
    } else {
        console.log(num);
        mainElement.innerHTML += `<div class="num">${num}</div>`

    }



}

