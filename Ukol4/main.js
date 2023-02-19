function vypisHodnotyFilmu(hodnoty){

    if(hodnoty.target.textContent === hodnoty.target.textContent){
        let zadanyFilm = document.querySelector(".zadanyFilm").value;

        let pocetZnaku = document.querySelector(".pocetZnaku");
        pocetZnaku.textContent = zadanyFilm.length;

        let velkaPismena = document.querySelector(".velkaPismena");
        velkaPismena.textContent = zadanyFilm.toUpperCase();   
        
        let prvnichPet = document.querySelector(".prvnichPet");
        prvnichPet.textContent = zadanyFilm.slice(0, 5);

        let poslednichPet = document.querySelector(".poslednichPet");
        poslednichPet.textContent = zadanyFilm.slice(-5);
    }

}


function email(textTlacitka){
    let zadanyEmail = document.querySelector(".zadanyEmail");
        zadanyEmail = zadanyEmail.value;

    if((textTlacitka.target.textContent === textTlacitka.target.textContent) && (zadanyEmail.includes("@"))){
        let dobraHodnota = document.querySelector(".zadanyEmail").style.borderColor = "green";
        
        //Pozice znaku @
        let atIndex = Number(zadanyEmail.indexOf("@"));

        //Vypsání pozice znaku @
        let pozice = document.querySelector(".pozice");
        pozice.textContent = atIndex;

        //Vyříznutí a vypsání jména a přijímení z e-mailu
        let jmenoPrijimeniEmailu = document.querySelector(".jmenoPrijimeniEmailu");
        jmenoPrijimeniEmailu.textContent = zadanyEmail.slice(0, atIndex);

        //Vyříznutí a vypsání domény z e-mailu
        let domena = document.querySelector(".domena");
        domena.textContent = zadanyEmail.slice(atIndex + 1);

        //Vytvoření objektu
        const parsedEmail = {
            userName: jmenoPrijimeniEmailu.textContent,
            domain: domena.textContent,
        }

        let objektJmeno = document.querySelector(".objektJmeno");
        objektJmeno.textContent = jmenoPrijimeniEmailu.textContent;
        let objektDomena = document.querySelector(".objektDomena");
        objektDomena.textContent = domena.textContent;
    }
    else{
        let zadanyEmail = document.querySelector(".zadanyEmail").style.borderColor = "red";
    }
}










