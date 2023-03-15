let c = console.log.bind(document)

/********** Kostka **********/
document.addEventListener("keydown", kostka) //Definovnai eventu naslouchajici, kolikrat byla zmacknuta klavesa
let side = 0 //Definovani promenne, do ktere se uklada po kolikate je zmacknuta klavesa

function kostka(){
    side += 1

    if(side === 7){
        side = 1
    }

    //Zmena koskty podle toho, po kolikate byla zmacknuta klavesa
    if(side === 1){
        document.querySelector(".dice").src="assets/side1.svg"
    }
    else if(side === 2){
        document.querySelector(".dice").src="assets/side2.svg"
    }
    else if(side === 3){
        document.querySelector(".dice").src="assets/side3.svg"
    }
    else if(side === 4){
        document.querySelector(".dice").src="assets/side4.svg"
    }
    else if(side === 5){
        document.querySelector(".dice").src="assets/side5.svg"
    }
    else if(side === 6){
        document.querySelector(".dice").src="assets/side6.svg"
    }

}
