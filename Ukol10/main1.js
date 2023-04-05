const c = console.log.bind(document)

let kameny = document.querySelectorAll(".kamen")
/* let pole1 = [] */

let tlacitko = ""
let klavesa = 0

let prvniNadpis = document.querySelector("#prvniNadpis")

let zvuk = ""

const hudbaXylofonu = (event) => {
    tlacitko = event.target.textContent
    
    if(tlacitko === "C"){
        prvniNadpis.textContent = tlacitko
        zvuk = new Audio("assets/tony/tony_C.mp3")
        zvuk.play()
    }
    else if(tlacitko === "D"){
        prvniNadpis.textContent = tlacitko
        zvuk = new Audio("assets/tony/tony_D.mp3")
        zvuk.play()
    }
    else if(tlacitko === "E"){
        prvniNadpis.textContent = tlacitko
        zvuk = new Audio("assets/tony/tony_E.mp3")
        zvuk.play()
    }
    else if(tlacitko === "F"){
        prvniNadpis.textContent = tlacitko
        zvuk = new Audio("assets/tony/tony_F.mp3")
        zvuk.play()
    }
    else if(tlacitko === "G"){
        prvniNadpis.textContent = tlacitko
        zvuk = new Audio("assets/tony/tony_G.mp3")
        zvuk.play()
    }
    else if(tlacitko === "A"){
        prvniNadpis.textContent = tlacitko
        zvuk = new Audio("assets/tony/tony_A.mp3")
        zvuk.play()
    }
    else{
        prvniNadpis.textContent = tlacitko
        zvuk = new Audio("assets/tony/tony_B.mp3")
        zvuk.play()
    }
}

kameny.forEach((konkretniKamen, index) => {
    konkretniKamen.addEventListener("click", hudbaXylofonu)
    /* pole1.push(index) */ 
})




























































































