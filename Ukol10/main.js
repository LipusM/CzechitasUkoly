const c = console.log.bind(document)

let hodiny = 0
let minuty = 0

while(minuty < 60){

    minuty = minuty.toString().padStart(2, "0")

    c(`${hodiny}:${minuty}`)
    Number(minuty++) //Převedení na Number tam nemusí být, ale bez toho to nechápu. Jak to, že to funguje taky bez toho?    

    if(minuty === 60){
        hodiny++
        minuty = 0
    }

    if(hodiny === 24){
        break
    }
}

























































































