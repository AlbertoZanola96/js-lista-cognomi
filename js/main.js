// 1. chiedi all’utente il cognome;
var cognome_utente = prompt("Inserisci il tuo cognome");
console.log("Il cognome inserito è: " + cognome_utente);

// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var cognomi_arrey = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
console.log("I cognomi dell' array sono: " + cognomi_arrey);

cognomi_arrey.push(cognome_utente);
console.log("i cognomi dell' array più il tuo sono: " + cognomi_arrey);




// 3. stampa la lista ordinata alfabeticamente



// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
