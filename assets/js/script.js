
//Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito ed infine scrivi in pagina (non solo in console) il risultato, che va formattato in questo modo: nomecognomecolorepreferito23

//strumenti

/* 
- prompt
- document.getElementById
- console.log
*/

//chiedere il nome utente
const userFirstName = prompt('Inserisci qui il tuo nome');

//chiedere il cognome utente
const userLastName = prompt ('inserisci qui il tuo cognome');

//chiedere il colore preferito
const userFavouriteColor = prompt ('inserisci qui il tuo colore preferito');

//chiedere il numero
const userNumber = prompt ('inserisci qui il tuo numero')

//seleziona gli id da inserire nella variabile
const passwordElement = document.getElementById('password_generator');
console.log(passwordElement);

//stampa il risultato in console
console.log(`${userFirstName + userLastName + userFavouriteColor + userNumber}`)

//stampa il risultato a video
passwordElement.innerHTML = `${userFirstName + userLastName + userFavouriteColor + userNumber}`