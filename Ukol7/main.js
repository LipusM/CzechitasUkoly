let c = console.log.bind(document)

let catering = ""
let nazevUdalosti = ""
let pocetLidi = ""
let vysledek = ""

let sklonovaniLidi = ""
let vyslednyText = ""

/********** Catering **********/
function justFood(){
    pocetLidi = Number(document.querySelector("#pocetLidi").value)
    let cena = 1000 //Pevně stanovená cena za 1 osobu

    return cena * pocetLidi + " Kč"
}

function yourMama(){
    pocetLidi = Number(document.querySelector("#pocetLidi").value)
    let cena = 2500

    return cena * pocetLidi + " Kč"
}

function flavourHeaven(){
    pocetLidi = Number(document.querySelector("#pocetLidi").value)
    let cena = 3200

    return cena * pocetLidi + " Kč"
}

function createEvent1(){

    //Ziskani dodavatele cateringu, nazvu udalosti a poctu zucastnenych lidi
    catering = document.querySelector("#dodavatel").value
    nazevUdalosti = document.querySelector("#nazevUdalosti").value    
    pocetLidi = Number(document.querySelector("#pocetLidi").value)

    //Sklonovani slova "osob" podle hodnoty promenne pocetLidi
    if(pocetLidi === 1){
        sklonovaniLidi = "osobu"
    }
    else if(pocetLidi >= 2 && pocetLidi <= 4){
        sklonovaniLidi = "osoby"
        pocetLidi.classList.add("zelena")
    }
    else if(pocetLidi > 4){
        sklonovaniLidi = "osob"
    }

    //Všude se vypisuje stejný text (kromě hodnoty cateringu, ktera se odviji od zvoleneho dodavatele)
    vyslednyText = "Událost " + nazevUdalosti + " s cateringem od " + catering + " pro " + pocetLidi + " " + sklonovaniLidi + " bude stát "
    vysledek = document.querySelector("#vysledek1")

    //Vypis textu do stranky
    if(catering === "Just Food"){
         vysledek.textContent = vyslednyText + justFood()
    }
    else if(catering === "Your Mama"){
        vysledek.textContent = vyslednyText + yourMama()
   }
   else if(catering === "Flavour Heaven"){
    vysledek.textContent = vyslednyText + flavourHeaven()
    }

}


