//aggiungere queste funzionalità al randomizer:

// 1) ogni volta che il sito viene lanciato, controlla se c'è un array di studenti nel local storage.
//     -se esite carica quell'array.
//     -altrimenti scrive il contenuto del json sul local storage e poi carica quello.
// 2) viene aggiunta la funzionalità "aggiungi studente", 
// quando premo il tasto aggiungi studente viene aperta una nuova pagina con una form
// che mi consente di aggiungere uno studente e salvarlo nell'array contenuto nel local storage.
// 3) viene aggiunta la funzione edita studente che aggiunge un tasto ad ogni card studente
// se premo il tasto edit si apre una nuova form precompilata con i dati dello studente
// una volta che salvo lo studente editato, viene sovrascritto lo studente precedente.
// nella form di edit studente c'è anche l'opzione cancella che rimuove lo studente.
// 4) aggiungi la funziona blocca coppia, che permette di evitare che una coppia venga scoppiata.

import StudentService from "./services/student-service.js";
import StorageService from "./services/storage-service.js";
import HomePageComponent from "./components/home-page-component.js";

const serviceStdn = new StudentService();
const serviceStrg = new StorageService();

const homePageC = new HomePageComponent(serviceStdn, serviceStrg);

homePageC.start();

//da migliorare
// 1) quando c'è il form precompilato riuscire a recuperare il date birthdate
// 2) quando c'è il form precompilato la select migliorarlo
// 3) quando fai remove di tutti gli studenti carica automaticamente da json (lo voglio?)
// 4) all'inizio nel localstorage crea 'starred' perche??
// 5) fare css