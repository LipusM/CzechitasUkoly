const c = console.log.bind(document)

/********** Auto **********/
let posunDoleva = 0
let posunNahoru = 0
let posunDoprava = 0
let posunDolu = 0

let znak = 0
let hranice = document.querySelector(".jizdniPlocha")
let zavodniAuto = document.getElementById("zavodniAuto")

function jizda(event){

    /* c(zavodniAuto.offsetLeft) */

    znak = event.keyCode

    if(znak === 65){
        posunDoleva -= 10
        zavodniAuto.style.marginLeft =  posunDoleva + "px"
    }
    else if(znak === 87){
        posunNahoru -= 10
        zavodniAuto.style.marginTop = posunNahoru + "px"
    }
    else if(znak === 68){
        posunDoprava -= 10
        zavodniAuto.style.marginRight = posunDoprava + "px"
    }
    else if(znak === 83){
        posunDolu -= 10
        zavodniAuto.style.marginBottom = posunDolu + "px"
    } 

    obarveniHranic()

    /* c(zavodniAuto.offsetLeft) */
}

//Obarveni hranic auta při překročení červeného ohraničení
let coordinatesY = ""
let coordinatesX = ""
function obarveniHranic(){

    coordinatesY = zavodniAuto.offsetTop
    coordinatesX = zavodniAuto.offsetLeft

    //Pro 24 monitory (2144 x 1206)
    if(screen.width === 1920 && screen.height === 1080){
        if(coordinatesX < 502 || coordinatesX > 1302 || coordinatesY < 692 || coordinatesY > 1042){
            zavodniAuto.style.border = "solid red"
        }
        else{
            zavodniAuto.style.border = "solid green"
        }
    }

    //Pro 13 monitory (1920 x 800)
    if(screen.width === 1920 && screen.height === 800){
        if(coordinatesX < 320 || coordinatesX > 860 || coordinatesY < 692 || coordinatesY > 1042){
            zavodniAuto.style.border = "solid red"
        }
        else{
            zavodniAuto.style.border = "solid green"
        }
    }

        //MacAir 2018 a výše (1584 x 990)
        if(screen.width === 1584 && screen.height === 990){
            if(coordinatesX < 394 || coordinatesX > 1074 || coordinatesY < 673 || coordinatesY > 1018){
                zavodniAuto.style.border = "solid red"
            }
            else{
                zavodniAuto.style.border = "solid green"
            }
        }

}

document.addEventListener("keydown", jizda)


