const c = console.log.bind(document)

const numbers = [-24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5]

//a) Vypište na výstup všechna čísla
/* c(`Výpis všech čísel: `)
numbers.forEach((vypisCisel) => {
    c(vypisCisel)
}) */

//b) Vypište na výstup druhé mocniny všech čísel
/* c(`Výpis mocnin: `)
numbers.forEach((vypisMocnin) => {
    c(vypisMocnin*vypisMocnin)
}) */

//c) Výpis záporných čísel
/* c(`Výpis záporných čísel: `)
numbers.forEach((zapornaCisla) => {
    if(zapornaCisla < 0){
        c(zapornaCisla)
    }
}) */

//d) Výpis absolutní hodnoty čísla
/* c(`Výpis absolutních hodnot: `)
numbers.forEach((absolutniHodnota) => {
    c(Math.abs(absolutniHodnota))
}) */

//e) Výpis sudých čísel
/* c(`Výpis sudých čísel: `)
numbers.forEach((sudaCisla) => {
    if(sudaCisla % 2 === 0){
        c(sudaCisla)
    }
}) */

//f) Výpis absolutních hodnot dělitelných třemi
/* c(`Výpis absolutních hodnot dělitelných třemi: `)
numbers.forEach((absolutniTremi) => {
    if(absolutniTremi % 3 === 0){
        c(Math.abs(absolutniTremi))
    }
}) */

//g) Jak daleko jsou čísla v seznamu od čísla 5
/* numbers.forEach((vzdalenost, index) => {
    c(`Vzdalenost ${vzdalenost} od ${numbers.slice(-1)} je: ${numbers.length - (index+1)} `)
}) */

//h) Druhé mocniny vádleností všech čísel od čísla 5
/* numbers.forEach((mocninaVzdalenosti, index) => {
    let druhaMocnina = numbers.length - (index+1)
    c(`Druhá mocnina vzdálenosti ${mocninaVzdalenosti} od ${numbers.slice(-1)} je: ${druhaMocnina * druhaMocnina}`)
}) */

//i) Množství záporných čísel
/* let zaporna = 0
numbers.forEach((zapornaHodnota) => {
    if(zapornaHodnota < 0){
        zaporna++
    }
})
c(zaporna) */

//j) Součet čísel v poli
/* let soucet = 0
numbers.forEach((soucetCisel) => {
    soucet += soucetCisel
})
c(soucet) */

//k) Průměr všech čísel v poli
/* let soucet1 = 0
numbers.forEach((soucetCisel) => {
    soucet1 += soucetCisel
})
c(soucet1 / (numbers.length)) */

//i) Součet kladných čísel
/* let soucet2 = 0
numbers.forEach((soucetKladnych) => {
    if(soucetKladnych > 0){
        soucet2 += soucetKladnych
    }
})
c(soucet2) */
















































































