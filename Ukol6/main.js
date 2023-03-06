c = console.log.bind(document)

//Úkol č. 1: Výplata
function salary(){
    let mzda = Number(document.querySelector(".mzda").value.replace(",", "."))
    let hodiny = Number(document.querySelector(".hodiny").value.replace(",", "."))
    let dny = Number(document.querySelector(".dny").value.replace(",", "."))

    //Výpočet hrubé mzdy
    let hrubaMzda = mzda * hodiny * dny
    return hrubaMzda
}

function taxed(){
    let hrubaMzda = document.querySelector(".hrubaMzda")
    let cistaMzda = document.querySelector(".cistaMzda")

    let nonTaxed = salary()
    hrubaMzda.textContent = nonTaxed

    //Výpočet čisté mzdy (normálně bych to dal do fce salary, ale držím se zadání)
    let dan = 0.15
    cistaMzda.textContent = nonTaxed - (nonTaxed * dan)

    //Stylování
    if(cistaMzda.textContent === "0" || hrubaMzda.textContent === "0"){
        cistaMzda.innerHTML = "<span style=\"color: red\">Error</span>"
        hrubaMzda.innerHTML = "<span style=\"color: red\">Error</span>"
    }
    else if(cistaMzda.textContent === "NaN" || hrubaMzda.textContent === "NaN"){
        cistaMzda.innerHTML = "<span style=\"color: red\">Error</span>"
        hrubaMzda.innerHTML = "<span style=\"color: red\">Error</span>"
    }
    else{
        cistaMzda.classList.add("spravnyVysledek")
        hrubaMzda.classList.add("spravnyVysledek")
    }

}



//Úkol č. 2: Kalkulačka
function matematickaOperace(cislo){
    let objekt1 ={
        number1: Number(document.querySelector(".vstupCislo").value.replace(",", ".")),
        operation1: cislo.target.textContent ,
    }

    c(objekt1)
    return objekt1
}


function calculate(){
    let vypocet = matematickaOperace()
    c(vypocet)
}






function calculate2(num1, operation, num2){
    if (operation === "+"){
        c(num1 + num2)
        return num1 + num2
    }
    else if(operation === "-"){
        c(num1 - num2)
        return num1 - num2
    }
    else if(operation === "*"){
        c(num1 * num2)
        return num1 * num2
    }
    else if(operation === "/"){
        c(num1 / num2)
        return num1/num2
    }
}


//Úkol č. 3: Ceník
function selectPlan(e){
    let zakladni = document.querySelector("#plan1")
    let rozsireny = document.querySelector("#plan2")
    let mega = document.querySelector("#plan3")

    if(e.target.textContent === "Základní" || e.target.textContent === "5€ / měsíc" || e.target.innerText === "Základní\n\n5€ / měsíc"){
        rozsireny.classList.remove("plan--selected")
        mega.classList.remove("plan--selected")
        zakladni.classList.toggle("plan--selected")
    }
    else if(e.target.textContent === "Rozšířený" || e.target.textContent === "10€ / měsíc" || e.target.innerText === "Rozšířený\n\n10€ / měsíc"){
        zakladni.classList.remove("plan--selected")
        mega.classList.remove("plan--selected")
        rozsireny.classList.toggle("plan--selected")

/*         if(rozsireny.classList.contains("plan--selected")){
            c("Lepší to už být nemůže!")
        } */
    }
    else if(e.target.textContent === "Mega" || e.target.textContent === "20€ / měsíc" || e.target.innerText === "Mega\n\n20€ / měsíc"){
        zakladni.classList.remove("plan--selected")
        rozsireny.classList.remove("plan--selected")
        mega.classList.toggle("plan--selected")
    }
}
























































































