let c = console.log.bind(document)

/********** Budik **********/
let cas = 0
let ohraniceni1 = document.querySelector(".pocetVterin")
let zvuk = document.querySelector(".hudba")
let zvonicka = ""

let vypnutiZvuku = document.querySelector(".alarm")
let zapnutiZvuku = document.querySelector(".alarm")
let zvukBudiku = document.querySelector(".alarm")
//a)
function ukolA(){ //Definovani fce, kdy se spustí budík
    zapnutiZvuku.classList.add("alarm--ring")
    zvuk.play()
}
setTimeout(ukolA, 5000) //Spusteni fce ukolA() za 5s po jejim nacteni

//b)
function spustZvoneni(){ //Fce spoustejici budik klikem na "Spusť budik"
    cas = Number(document.querySelector(".pocetVterin").value.concat("000").replace(",","."))

    zvukBudiku.classList.remove("alarm--ring")
 
    zvonicka = setTimeout(ukolA, cas)
    obarveni(cas)
}

function obarveni(casomira){ //Fce obarvujici hranici inputu
    if(!casomira){
        ohraniceni1.style.borderColor = "red"
        zvukBudiku.classList.remove("alarm--ring")

        clearTimeout(zvonicka)
        return false
    }
    else{
        ohraniceni1.style.borderColor = "green"
        return true
    }
}

//c)
function zrusZvoneni(){
    zvukBudiku.classList.remove("alarm--ring")
    zvuk.pause()
    zvuk.currentTime = 0

    clearTimeout(zvonicka)
}