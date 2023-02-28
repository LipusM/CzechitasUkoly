let c = console.log.bind(document);

/* Úkol č. 1: Parsování data */
function parseData(overeni){
    let vstupniHodnotaDatumu = document.querySelector(".vstupniHodnotaDatumu").value;
    let obraveni = document.querySelector(".vstupniHodnotaDatumu");

    if(overeni.target.textContent === overeni.target.textContent && vstupniHodnotaDatumu.length === 10){
        let day = document.querySelector(".day");
        let month = document.querySelector(".month");
        let year = document.querySelector(".year");

        obraveni.style.borderColor = "green";

        let date = {
            day: day.textContent = vstupniHodnotaDatumu.slice(0, 2),
            month: month.textContent = vstupniHodnotaDatumu.slice(3, 5),
            year: year.textContent = vstupniHodnotaDatumu.slice(-4),
        }

    }
    else{
        obraveni.style.borderColor = "red";
    }
}










/* Úkol č. 2: Formátování data */
function formDate(){
    
        let day= document.querySelector(".day2").value;
        let month = document.querySelector(".month2").value;
        let year = document.querySelector(".year2").value;

        let objektUkol2 = {
            day2: day.padStart(2,0),
            month2: month.padStart(2,0),
            year2: year.padStart(4,0),
        }

        let { day2, month2, year2} = objektUkol2;

        let vypsanyRetezec = document.querySelector(".vypsanyRetezec");
        return vypsanyRetezec.textContent = day2 + " " + month2 + " " + year2;
    
}

//DOTAZ: Jak napsat onClick funkci, aby se při každém kliknutí dané hodnoty
// posunuly do vyvolávaní fce někdy později? A ne jen při načtení stránky.
//V HTML na 77 a 78 řádku mne napadlo to udělat přes aktualizaci stránky. Ale to se zase smažou
//hodnoty z jiných polí. A nastavit to tak, aby se ty hodnoty nesmazaly, tak nevím, jestli tohle je správný přístup.

let value1 = formDate();
c("Zkouška výpisu výsledku funkce: " + value1);



//Ukol napsany tak, aby return fungoval dle zadání.
function formDate2(num1, num2, num3){

    let objektUkol22 = {
        day2: num1.toString(),
        month2: num2.toString(),
        year2: num3.toString(),
    }

    let { day2, month2, year2} = objektUkol22;

    let vypsanyString = day2.padStart(2, 0) + " " + month2.padStart(2, 0) + " " + year2.padStart(4, 0);
   

    return vypsanyString;
}
let ukol2 = formDate2(8, 2, 994);
c(ukol2);















/* Úkol č. 3: Python zaokrouhlování */
function round(overeni){
    let vstup = Number((document.querySelector(".vstupniHodnotaCisla").value.replace(",", ".")));

    let vysledek = document.querySelector(".zaokrouhleneCislo");

    let pracovniCislo1 = (vstup % 1);
    
    if(pracovniCislo1 < 0.5){ //Desetinná část vstupního čísla < 0,5
        let vysledneCislo = Math.floor(vstup); //Pokud všude místo vysledneCislo napisu vstup, tak mi to při zaokrouhlování - čísel blbne. Tak proto jsem to napsal takhle.
        vysledek.textContent = vysledneCislo;
        vysledek.classList.add("spravneObarveni");
    }
    else if (pracovniCislo1 > 0.5){ //Desetinná část vstupního čísla > 0,5
        let vysledneCislo = Math.ceil(vstup);
        vysledek.textContent = vysledneCislo;
        vysledek.classList.add("spravneObarveni");
    }
    else if( pracovniCislo1 === 0.5){ //Desetinná část vstupního čísla === 0,5
        vstupSpecialni = Math.trunc(vstup);
        
        if(vstupSpecialni % 2 === 0){ //Číslo před desetinnou částí je sudé
            let vysledneCislo = Math.floor(vstup);
            vysledek.textContent = vysledneCislo;
            vysledek.classList.add("spravneObarveni");
        }
        else{                        //Číslo před desetinnou částí je liché
            let vysledneCislo = Math.ceil(vstup);
            vysledek.textContent = vysledneCislo;
            vysledek.classList.add("spravneObarveni");
        }
    }

    if(vstup < 0){                  //Vstupní číslo je -
        if(pracovniCislo1 < -0.5){  //Desetinná část > -0,5
            c(pracovniCislo1 + " >" + " -0.5");
            let vysledneCislo = Math.floor(vstup);
            vysledek.textContent = vysledneCislo;
            vysledek.classList.add("spravneObarveni");
        }
        else if(pracovniCislo1 > -0.5){ //Desetinná část < -0,5
            c(pracovniCislo1 + " <" + " -0.5");
            let vysledneCislo = Math.ceil(vstup);
            vysledek.textContent = vysledneCislo;
            vysledek.classList.add("spravneObarveni");
        }
        else if(pracovniCislo1 === -0.5){ //Desetinná část === -0,5
            let vstupSpecialni = Math.trunc(vstup);

            if(vstupSpecialni % 2 === -0){ //Číslo před desetinnou částí je sudé
                let vysledneCislo = Math.ceil(vstup);
                vysledek.textContent = vysledneCislo;
                vysledek.classList.add("spravneObarveni");
            }
            else{                         //Číslo před desetinnou částí  je liché
                let vysledneCislo = Math.floor(vstup);
                vysledek.textContent = vysledneCislo;
                vysledek.classList.add("spravneObarveni");
            }
        }
    }


    let vstup3 = document.querySelector(".vstupniHodnotaCisla");

    if(vysledek.textContent === "0" || vysledek.textContent === ""){
        vstup3.style.borderColor = "red";
        vysledek.innerHTML = "<span style=\"color: red\">Error</span>";
    }
    else{
        vstup3.style.borderColor = "green";
    }

    if(vysledek.innerHTML === "<span style=\"color: red\">Error</span>"){
        vstup3.style.borderColor = "red";
    }

    c(typeof(vstup))

}


















