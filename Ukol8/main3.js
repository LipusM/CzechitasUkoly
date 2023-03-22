const c = console.log.bind(document)

let inputVstup1 = document.getElementById("Email2")
let inputVstup11 = ""

const emailoveDomeny = {
    domena1: ".com",
    domena2: ".co",
    domena3: ".uk",
    domena4: ".cz",
}

const {domena1, domena2, domena3, domena4} = emailoveDomeny

let overeniZavinace = ""

function kontrolaEmailu(){
    inputVstup11 = inputVstup1.value

    overeniZavinace = inputVstup11.includes("@")

    if( (overeniZavinace && inputVstup11.includes(domena1)) || (overeniZavinace && inputVstup11.includes(domena2)) ||
    (overeniZavinace && inputVstup11.includes(domena3)) || (overeniZavinace && inputVstup11.includes(domena4)) ){
        c("Jsi tady.")
        inputVstup1.style.borderColor = "green"

    }
    else{
        inputVstup1.style.borderColor = "red"

    }
}
































































































