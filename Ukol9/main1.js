const c = console.log.bind(document)

let time = ""
let odpocet1 = ""
let sekundy1 = document.querySelector(".alarm__seconds")
let minuty1 = document.querySelector(".alarm__minutes")

let budik = document.querySelector(".alarm").classList
let zvoneni = document.querySelector("#zvoneni")
let resetText = sekundy1.textContent
let vlozenaHodnota = document.querySelector(".time-input")

let minuty2 = ""
let sekundy2 = ""

function spustOdpocet(e){
    e.preventDefault()

    time = Number(vlozenaHodnota.value.replace(/\D/g, ''))
    odpocet1 = setInterval(odpocitavani, 1000)

    budik.remove("alarm--ring")
    obarveni()
}

function odpocitavani(){
    time -= 1

    if(time >= 60 || time < 60){
        minuty2 = Math.floor(time / 60)
        minuty1.textContent = Math.floor(time / 60)

        if(time < 60){
            minuty1.textContent = "00"
        }

        sekundy2 = time - minuty2 * 60
        sekundy1.textContent = sekundy2

        if(time === 0){
            budik.add("alarm--ring")
            zvoneni.play()
            clearInterval(odpocet1)
            sekundy1.textContent = "00"
        }
    }

}

function resetOdpocet(e){
    e.preventDefault()

    clearInterval(odpocet1)
    sekundy1.textContent = "00"
    minuty1.textContent = ""
    zvoneni.pause()
    zvoneni.currentTime = 0

    budik.remove("alarm--ring")
}

 function obarveni(){
    if (time === time){
        vlozenaHodnota.classList.add("spravneObarveni") //Proč mi nejde přidat tato hodnota?
        /* vlozenaHodnota.style.borderColor = "green" */ //Ani toto nejde
        c("ano") //Podmínka je splněna, jelikož se to do konzole vypíše.
    }
}




























































































