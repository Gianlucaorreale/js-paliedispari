/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/
//const userWord = prompt('inserisci una parola');//

/*VERSIONE ERRATA*/

/*const userWord = prompt('inserisci una parola');
console.log("la parola scelta dall'utente è : " + userWord)

function validatePalindrome (){
const len = userWord.length

 for (let i = 0 ; i < len / 2; i++){
    if (userWord[i] !== userWord[len - 1 - i]) {  
        console.log( 'la parola non è palindroma');  
    } else {
        console.log('la parola è palindroma')
    } 
 }
}

validatePalindrome()*/



const userWord = prompt('inserisci una parola')
console.log("la parola scelta dall'utente è : " + userWord);

function reverString (userWord) {
    let result = '';

    for(let i = userWord.length -1; i>= 0; i-- ) {
        result += userWord[i];
    }

    return result; 
}

const reversedString = reverString(userWord);
console.log(reversedString);

if (reversedString === userWord) {
    console.log( "questa parola è palindroma")
}
else{console.log('questa parola non è palindroma')}









