

/************* ELEMENTI *****************/
//bottone da cui genero la griglia
const play_Btn = document.getElementById("play-btn");
console.log(play_Btn);
//select da cui recupero i valori della funzione generateGrid al play btn click
const level_input = document.querySelector("select");
console.log(level_input);


/************* VARIABILI ****************/


//const level_input.value________in play btn click f

/************* FUNZIONI *****************/

/**
 * funzione che utilizza il numero inserito come primo argomento per costuire una griglia quadrata
 * (RowCols_Number^seconda) .
 * essa viene creata all'interno dell'elemento che ha per selettore il valore specificato nel secondo argomento
 * @param {number} rowCells_Number numero di colonne per riga
 * @param {*} container_SelectorCSS selettore CSS del contenitore in cui generare la griglia
 */
function generateGrid(rowCells_Number, container_SelectorCSS) {
    //recupero gli elementi che mi servono


    /*Dove:*/
    //Rilevazione contenitore 
    //creo una variabile che ha al suo interno l'elemento che ha per selettore css il valore espresso nel secondo argomento della funzione
    const container_El = document.querySelector(container_SelectorCSS);
    console.log("container_El", container_El);

    //______________________________________________________controllo sulla validità dell'elemento


    /* Cosa: */
    //creo la griglia in cui inserirò le celle
    const grid_El = document.createElement("div");
    console.log(grid_El);

    //classe nominale parlante: ti dice già quante celle porta per riga (come bootstrap row-cols-x)
    const grid_ElName = `grid-cells-${rowCells_Number}`;

    grid_El.classList.add(grid_ElName);
    //aggiungo la classe d-flex perchè funzioni correttamente il flexbasis degli elementi figli

    //in questo modo ho pieno controllo sul corretto funzionamento della struttura che andrò a creare, perchè noin dipende da elementi esterni
    grid_El.classList.add("d-flex");



    //recupero i valori che mi servono

    //______________________________________________________controllo sulla validità del numero inserito
    //numero totale delle celle che mi servono
    const totalCells_Number = Math.pow(rowCells_Number, 2);
    console.log("totalCells_Number", totalCells_Number);

    //ciclo di creazione (perchè non while?)
    //finchè i non è uguale al numero di celle totali da creare
    i = 0
    while (i < totalCells_Number) {
        console.log(i)

        //create piuttosto di innerHTML perchè così posso aggiungere degli eventi relativi all'elemento creato
        //creo la singola cella
        const cel_El = document.createElement("div");
        console.log(cel_El);

        //creo classe nominale per cel el
        const cel_ElName = `cel-${i + 1}`
        //ggiungo la classe cel-ElName all'elemento creato sopra cel_El
        cel_El.classList.add(cel_ElName);

        //ora determino le dimensioni dell'elemento grazie ad un calcolo basato sul primo argomento fornito alla funzione. poi lo assegno dando uno style inlinea ad ogni elemento:
        //calc = 100% (larghezza container) / (diviso) rowCells_Number (numero di celle volute per riga)

        //le proprietà in js sono tradotte da kebab-case a camel-case
        cel_El.style.flexBasis = `calc(100% / ${rowCells_Number}`;

        //Ogni cella  contiene ha un numero progressivo, da 1 a totalCells_Number
        cel_El.append(i + 1);

        /* devo aggiungere l'evento */


        //perchè funzioni correttamente il flexbasis delle celle occorre che l'elemento genitore in cui andrò ad inserire le celle abbia il display flex, ma lo faccio fuori dal ciclo ;




        i++
    }

    console.log(this, "this in generateGrid");
}



//try function
generateGrid(3, ".col-10");



play_Btn.addEventListener("clik", function () {

    generateGrid(3, ".col-10");

    level_input.value
})


