/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

const evenAndOdd = prompt ('scegli: pari o dispari');
const userNumber = parseInt(prompt ('inserisci un numero da 1 a 5'));
console.log("l'utente sceglie : " + evenAndOdd);
console.log("il numero dell'utente è : " + userNumber);

function getRandomNumber () {
    const cpuRandomNumber = Math.floor((Math.random() * 5) + 1);
    console.log ('il numero del cpu è : ' + cpuRandomNumber);
    return cpuRandomNumber
}

const sum = userNumber + getRandomNumber();
console.log( 'la somma dei numeri è ' + sum);

function getEvenAndOdd () {
    if (sum % 2 === 0){
        console.log('il risultato della somma è : pari')
    } else {
        console.log('il risultato della somma è : dispari')
    }
}

getEvenAndOdd()

if(sum % 2 === 0 && evenAndOdd === 'pari'){
    console.log("il vincitore è : l'utente")
}
else if (sum % 2 !== 0 && evenAndOdd === 'dispari'){
    console.log("il vincitore è : l'utente")
}
else{ console.log( 'il vincitore è : la cpu')};