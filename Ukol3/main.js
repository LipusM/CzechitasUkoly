let vysledekJedna = document.querySelector(".castJedna");

/**********Ukol 1**********/
let jmeno = prompt("Zadejte Vaše jméno: ");
let prijimeni = prompt("Zadejte Vaše přijímení: ");
let vek = prompt("Zadejte Váš věk: ");

vysledekJedna.textContent = jmeno + " " + prijimeni + ", " + vek;

/**********Ukol 2**********/
function red(){
    vysledekJedna.style.color = "red";
    vysledekJedna.style.backgroundColor = "white";
}

function green(){
    vysledekJedna.style.color = "green";
    vysledekJedna.style.backgroundColor = "white";
}

function yellow(){
    vysledekJedna.style.color = "yellow";
    vysledekJedna.style.backgroundColor = "black";
}

function orange(){
    vysledekJedna.style.color = "orange";
    vysledekJedna.style.backgroundColor = "white";
}

function blue(){
    vysledekJedna.style.color = "blue";
    vysledekJedna.style.backgroundColor = "white";
}

function pink(){
    vysledekJedna.style.color = "pink";
    vysledekJedna.style.backgroundColor = "white";
}

function purple(){
    vysledekJedna.style.color = "purple";
    vysledekJedna.style.backgroundColor = "white";
}

function black(){
    vysledekJedna.style.color = "black";
    vysledekJedna.style.backgroundColor = "white";
}

function white(){
    vysledekJedna.style.color = "white";
    vysledekJedna.style.backgroundColor = "black";
}

function brown(){
    vysledekJedna.style.color = "brown";
    vysledekJedna.style.backgroundColor = "white";
}

function refreshPage(){
    let vlastniObarveni = document.querySelector(".inputBarva");
    vlastniObarveni.value = "";
    window.location.reload();
} 


//Zadani barvy do inputu
function customColor(){
    let vlastniObarveni = document.querySelector(".inputBarva");
    vlastniObarveni = vlastniObarveni.value;

    vlastniObarveni = vlastniObarveni.toLowerCase(); //Převedení na malé znaky
    vlastniObarveni = vlastniObarveni.replace(/\s/g, ''); //Odstranění všech mezer

    vysledekJedna.style.color = vlastniObarveni;

    if (vlastniObarveni === "white" || vlastniObarveni === "rgb(255,255,255)" || vlastniObarveni === "#ffffff"){
        vysledekJedna.style.backgroundColor = "black";
    }
    else{
        vysledekJedna.style.backgroundColor = "white";
    }

}
























































































