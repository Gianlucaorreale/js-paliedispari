/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/
//const userWord = prompt('inserisci una parola');//
const userWord = prompt('inserisci una parola');
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

validatePalindrome()




