//Scrivi un programma che stampi i numeri da 1 a 100 in console

//Per i multipli di 3 stampi “Fizz” al posto del numero;
//Per i multipli di 5 stampi "Buzz";
//Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".

//BONUS:
//Stampare questo esercizio nel DOM sfruttando i quadratini che abbiamo già fatto questa mattina nel live coding. 

for (let i=1; i<=100; i++) {

    let word = i;
    let squareClass = '';

    if (i % 15 == 0) {
        word = 'FizzBuzz';
        squareClass = 'fizzBuzz'
        console.log(word);
    } else if (i % 5 == 0) {
        word = 'Buzz';
        squareClass = 'buzz'
        console.log(word);
    } else if (i % 3 == 0) {
        word = 'Fizz';
        squareClass = 'fizz'
        console.log(word);
    } else {
        squareClass = 'defaultSquare'
        console.log(i);
    }

    document.getElementById("squares").innerHTML +=  
    `<div class="square">
        <div class="${squareClass}">${word}</div>
    </div>`

} 
