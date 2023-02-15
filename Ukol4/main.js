
/**********Ukol 1**********/
function vlozeniDatumu(kliknutiDatum){

    if(kliknutiDatum.target.textContent == kliknutiDatum.target.textContent){
        let zadanyDen = Number((document.querySelector(".zadanyDen").value).replace(/\D/g, ''));
        let zadanyMesic = Number((document.querySelector(".zadanyMesic").value).replace(/\D/g, ''));
        let zadanyRok = Number((document.querySelector(".zadanyRok").value).replace(/\D/g, ''));


        let vyslednyDen = document.querySelector(".den");
        vyslednyDen.textContent = zadanyDen + ". ";

        if(vyslednyDen.textContent <= 0 || vyslednyDen.textContent >= 32 || vyslednyDen.textContent == ""){
            vyslednyDen.innerHTML = "<span style=\"color:red\">Error </span>"
        }
        else if( vyslednyDen.textContent >= 1 && vyslednyDen.textContent <= 31){
	/**********       OTÁZKA       **********/
        //Duplikativní s řádkem 12 (stejně u následujícího IF), ale bez toho to nefunguje.
        //Nevíš proč? Přišel jsem na to lehce náhodou    
            vyslednyDen.textContent = zadanyDen + ". "; 
        }
        else{
            vyslednyDen.innerHTML = "<span style=\"color:red\">Error </span>"
        } 
 


        
        let vyslednyMesic = document.querySelector(".mesic");
        vyslednyMesic.textContent = zadanyMesic + ". "
        
        if(vyslednyMesic.textContent <= 0 || vyslednyMesic.textContent >= 13){
            vyslednyMesic.innerHTML = "<span style=\"color: red\">Error </span>"
        }
        else if( vyslednyMesic.textContent >= 1 && vyslednyMesic.textContent <= 12){
            vyslednyMesic.textMesic = zadanyMesic + ". ";
        }
        else{
            vyslednyMesic.innerHTML = "<span style=\"color:red\">Error </span>"
        }



        let vyslednyRok = document.querySelector(".rok");
        vyslednyRok.textContent = zadanyRok;

        if(vyslednyRok.textContent.length <= 3){
            vyslednyRok.innerHTML = "<span style=\"color:red\">Error</span>";
        }
        else{
            vyslednyRok.textContent = zadanyRok;
        }
    }
}




/**********Ukol 2**********/
let prvniTeplota = document.querySelector(".teplotaZ");
let druhaTeplota = document.querySelector(".teplotaDo");
function prevedeniTeploty(kliknutiTeplota){


    if(kliknutiTeplota.target.textContent == kliknutiTeplota.target.textContent){

 		if(prvniTeplota.textContent == "Fahrnheit °F"){
			let zadanaTeplota = Number((document.querySelector(".zadanaTeplota").value).replace(/\D/g, ''));

			let stupneCelsia = Number((5*(zadanaTeplota - 32)) / 9);
			stupneCelsia = stupneCelsia.toFixed(2);
	
			let vysledek = document.querySelector(".vyslednaTeplota");
			vysledek.value = stupneCelsia;
		}
		else if(prvniTeplota.textContent == "Celsius °C"){
			let zadanaTeplota = Number((document.querySelector(".zadanaTeplota").value).replace(/\D/g, ''));

			let stupneFahrnheit = ((9*zadanaTeplota)/5) + 32;
			stupneFahrnheit = stupneFahrnheit.toFixed(2);

			let vysledek = document.querySelector(".vyslednaTeplota");
			vysledek.value = stupneFahrnheit;
		}
		
    }
}

function obratitPrevod(kliknutiObraceni){
	if(kliknutiObraceni.target.textContent == kliknutiObraceni.target.textContent){
		if(prvniTeplota.textContent == "Fahrnheit °F"){
			prvniTeplota.textContent = "Celsius °C";
			druhaTeplota.textContent = "Fahrnheit °F";
		}
		else if(prvniTeplota.textContent == "Celsius °C"){
			prvniTeplota.textContent = "Fahrnheit °F";
			druhaTeplota.textContent = "Celsius °C";
		}
	}
}


/**********Ukol 3**********/
const flight = {
	id: '145c01af48dd00002715248e_0',
	dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
	aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
	duration: {
		departure: 8400,
		return: 0,
		total: 8400,
	},
	fly_duration: '2h 20m',
	flyFrom: 'PRG',
	cityFrom: 'Prague',
	cityCodeFrom: 'PRG',
	countryFrom: {
		code: 'CZ',
		name: 'Czechia',
	},
	flyTo: 'BCN',
	cityTo: 'Barcelona',
	cityCodeTo: 'BCN',
	countryTo: {
		code: 'ES',
		name: 'Spain',
	},
	distance: 1359.54,
	airline: 'FR',
	pnr_count: 1,
	technical_stops: 0,
	price: 36,
	bags_price: {
		1: 34.95,
		2: 69.91,
	},
	baglimit: {
		hand_width: 20,
		hand_height: 40,
		hand_length: 55,
		hand_weight: 10,
		hold_width: 81,
		hold_height: 119,
		hold_length: 119,
		hold_dimensions_sum: 319,
		hold_weight: 20,
	},
	availability: {
		seats: 2,
	},
	conversion: {
		EUR: 36,
	},
	quality: 66.66659,
}

const {cityFrom, 
	cityTo, 
	baglimit: 
		{hand_width, hand_height, hand_length, hand_weight, hold_width, hold_height, hold_length, hold_weight},
	bags_price,
	conversion: {
		EUR,
	}
	} = flight

//a)
let startovniZeme = document.querySelector(".startovniZeme");
startovniZeme.textContent = " " + cityFrom;

let cilovaZeme = document.querySelector(".cilovaZeme");
cilovaZeme.textContent = " " + cityTo;

//b) a c)
let handWidth = document.querySelector(".handWidth");
handWidth.textContent = hand_width + " cm";

let handHeight = document.querySelector(".handHeight");
handHeight.textContent = hand_height + " cm";

let handLength = document.querySelector(".handLength");
handLength.textContent = hand_length + " cm";

let handWeight = document.querySelector(".handWeight");
handWeight.textContent = hand_weight + " kg";


let holdWidth = document.querySelector(".holdWidth");
holdWidth.textContent = hold_width + " cm";

let holdHeight = document.querySelector(".holdHeight");
holdHeight.textContent = hold_height + " cm";

let holdLength = document.querySelector(".holdLength");
holdLength.textContent = hold_length + " cm";

let holdWeight = document.querySelector(".holdWeight");
holdWeight.textContent = hold_weight + " kg";

//d)
let cenaZavazadla = Object.values(bags_price);
cenaZavazadla = cenaZavazadla[1];

let cenaDruhehoZavazadla = cenaZavazadla * EUR;
let vysledekCenaDruhehoZavazadla = document.querySelector(".cenaDruhehoZavazadla");
vysledekCenaDruhehoZavazadla.textContent = cenaDruhehoZavazadla.toFixed(0) + " Kč";








































































