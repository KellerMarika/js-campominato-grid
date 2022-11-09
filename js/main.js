

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
 * @param {*} HTMLselectorContainer selettore html del contenitore in cui generare la griglia
 */
function generateGrid(rowCells_Number, HTMLselectorContainer) {
    //recupero gli elementi che mi servono


    /*  let HTMLselectorContainer= document.querySelector("HTMLselectorContainer") ___________________________________________________________________________riguardaci non si fa così*/

    //recupero i valori che mi servono

    //numero totale delle celle che mi servono
    const totalCells_Number = Math.pow(rowCells_Number, 2);
    console.log("totalCells_Number",totalCells_Number);

    //ciclo di creazione (perchè non while?)
    //finchè i non è uguale al numero di celle totali da creare
    i=0
    while (i < totalCells_Number) {
        console.log(i)
        //create piuttosto di innerHTML perchè così posso aggiungere degli eventi relativi all'elemento creato

        i++
    }

    console.log(this, "this in generateGrid")
}

//try function
generateGrid(3, "col-10");



play_Btn.addEventListener("clik", function () {

    generateGrid(3, "col-10");

    level_input.value
})


