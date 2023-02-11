let vysledekJedna = document.querySelector(".castJedna");

/**********Ukol 1**********/
let jmeno = prompt("Zadejte Vaše jméno: ");
let prijimeni = prompt("Zadejte Vaše přijímení: ");
let vek = prompt("Zadejte Váš věk: ");

vysledekJedna.textContent = jmeno + " " + prijimeni + ", " + vek;

/**********Ukol 2**********/

function buttonColor(barva){

    if(barva.target.textContent == "Red"){
        vysledekJedna.style.color = barva.target.textContent;
        vysledekJedna.style.backgroundColor = "white";
    }
    else if (barva.target.textContent == "Green"){
        vysledekJedna.style.color = barva.target.textContent;
        vysledekJedna.style.backgroundColor = "white";
    }
    else if (barva.target.textContent == "Yellow"){
        vysledekJedna.style.color = barva.target.textContent;
        vysledekJedna.style.backgroundColor = "black";
    }
    else if (barva.target.textContent == "Orange"){
        vysledekJedna.style.color = barva.target.textContent;
        vysledekJedna.style.backgroundColor = "white";
    }
    else if (barva.target.textContent == "Blue"){
        vysledekJedna.style.color = barva.target.textContent;
        vysledekJedna.style.backgroundColor = "white";
    }
    else if (barva.target.textContent == "Pink"){
        vysledekJedna.style.color = barva.target.textContent;
        vysledekJedna.style.backgroundColor = "white";
    }
    else if (barva.target.textContent == "Purple"){
        vysledekJedna.style.color = barva.target.textContent;
        vysledekJedna.style.backgroundColor = "white";
    }
    else if (barva.target.textContent == "Black"){
        vysledekJedna.style.color = barva.target.textContent;
        vysledekJedna.style.backgroundColor = "white";
    }
    else if (barva.target.textContent == "White"){
        vysledekJedna.style.color = barva.target.textContent;
        vysledekJedna.style.backgroundColor = "black";
    }
    else if (barva.target.textContent == "Brown"){
        vysledekJedna.style.color = barva.target.textContent;
        vysledekJedna.style.backgroundColor = "white";
    }
    else{
        let aktualizaceStranky1 = document.querySelector(".castJedna");
        aktualizaceStranky1.textContent = "";

        let aktualizaceStranky2 = document.querySelector(".inputBarva");
        aktualizaceStranky2.value = "";

        window.location.reload();
    }

}


//Zadani barvy do inputu
function customColor(){
    let vlastniObarveni = document.querySelector(".inputBarva").value.toLowerCase().replace(/\s/g, '');

    vysledekJedna.style.color = vlastniObarveni;

    if (vlastniObarveni === "white" || vlastniObarveni === "rgb(255,255,255)" || vlastniObarveni === "#ffffff"){
        vysledekJedna.style.backgroundColor = "black";
    }
    else{
        vysledekJedna.style.backgroundColor = "white";
    }

}
























































































