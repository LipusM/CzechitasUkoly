const c = console.log.bind(document)

let vysledekHodu = document.querySelector("#vysledekHodu")
let hod = vysledekHodu.style

let hodKostkou = document.querySelectorAll(".hodKostkou")
let nahodneCislo = 0
let konkretniPokus = 0

let resetHazeni = document.querySelectorAll(".resetHazeni")

let cisloPokusu = document.querySelector("#cisloPokusu")
let pokus = cisloPokusu.style

let statistika = document.querySelector("#statistika")
let statistikaHodnoty = []

const roll = () => {
    x = Math.floor((Math.random() * 6) + 1)
    vysledekHodu.textContent = x
    
    konkretniPokus++
    cisloPokusu.textContent = konkretniPokus

    if(x === 6){
        hod.color = "green"
        pokus.color = "green"

        statistikaHodnoty.push(konkretniPokus)
        statistika.value = statistikaHodnoty.join(", ")
        konkretniPokus = 0
    }
    else{
        hod.color = "red"
        pokus.color = "red"
    }
}

const functionReset = () => {
    vysledekHodu.textContent = 0

    konkretniPokus = 0
    cisloPokusu.textContent = konkretniPokus
    hod.color = "red"
    pokus.color = "red"

    statistikaHodnoty = []
    statistika.value = ""
}

hodKostkou.forEach((funkceHazeni) => {
    funkceHazeni.addEventListener("click", roll)
})

resetHazeni.forEach((funkceReset) => {
    funkceReset.addEventListener("click", functionReset)
})


















































