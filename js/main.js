// 1. chiedi all’utente il cognome;

var cognome_utente = prompt("Inserisci il tuo cognome");
console.log("Il cognome inserito è: " + cognome_utente);

// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’

var cognomi_arrey = ["bianchi", "neri", "rossi", "verdi", "gialli"];
cognomi_arrey.push(cognome_utente);
console.log("I cognomi contenuti nell' array sono: " + cognomi_arrey);


// 3. stampa la lista ordinata alfabeticamente
console.log(cognomi_arrey.sort());



// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
console.log(cognomi_arrey.indexOf(cognome_utente ) + 1);
