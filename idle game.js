//salvataggio tutto
const savebutton = document.querySelector('.button');
const savetolocalstorege = () => {
    localStorage.setItem('textinput', materia)
}
savebutton.addEventListener('click', savetolocalstorege)
const savemoltiplicatore = () => {
    localStorage.setItem('moltiplicatoreinput', moltiplicatore)
}
savebutton.addEventListener('click', savemoltiplicatore)
const savemoneyonclick = () => {
    localStorage.setItem('moneyonclickinput', moneyonclick)
}
savebutton.addEventListener('click', savemoneyonclick)
const savecostomoltiplicatore = () => {
    localStorage.setItem('costomoltiplicatoreinput', costomoltiplicatore)
}
savebutton.addEventListener('click', savecostomoltiplicatore)
const saveaumento = () => {
    localStorage.setItem('aumentoinput', aumento)
}
savebutton.addEventListener('click', saveaumento)
const savemoltiplicatoreele = () => {
    localStorage.setItem('moltiplicatoreeleinput', moltiplicatoreele)
}
savebutton.addEventListener('click', savemoltiplicatoreele)
const savemoltiplicatorene = () => {
    localStorage.setItem('moltiplicatoreneinput', moltiplicatorene)
}
savebutton.addEventListener('click', savemoltiplicatorene)
const savemoltiplicatorepro = () => {
    localStorage.setItem('moltiplicatoreproinput', moltiplicatorepro)
}
savebutton.addEventListener('click', savemoltiplicatorepro)
const saveneutroni = () => {
    localStorage.setItem('neutroniinput', neutroni)
}
savebutton.addEventListener('click', saveneutroni)
const saveelettroni = () => {
    localStorage.setItem('elettroniinput', elettroni)
}
savebutton.addEventListener('click', saveelettroni)    
const saveprotoni = () => {
    localStorage.setItem('protoniinput', protoni)
}
savebutton.addEventListener('click', saveprotoni)
const saveidrogeno = () => {
    localStorage.setItem('idrogenoinput', idrogeno)
}
savebutton.addEventListener('click', saveidrogeno)
const savezolfo = () => {
localStorage.setItem('zolfoinput', zolfo)
}
const saveelio = () => {
localStorage.setItem('elioinput', elio)
}
const savecarbonio = () => {
localStorage.setItem('carbonioinput', carbonio)
}
const saveossigeno = () => {
localStorage.setItem('ossigenoinput', ossigeno)
}
savebutton.addEventListener('click', savezolfo)
savebutton.addEventListener('click', saveelio)
savebutton.addEventListener('click', savecarbonio)
savebutton.addEventListener('click', saveossigeno)






//tutte le variabili inizio
if(parseFloat (localStorage.getItem('galassieinput'))) {
    galassie = parseFloat (localStorage.getItem('galassieinput'))
}else {
    var galassie = 0
}
if(parseFloat (localStorage.getItem('moneyonclickinput'))) {
    moneyonclick = parseFloat (localStorage.getItem('moneyonclickinput'))
}else {
    var moneyonclick = 2
}
if(parseFloat (localStorage.getItem('textinput'))) {
    materia = parseFloat (localStorage.getItem('textinput'))
}else {
    var materia = 0
}
if(parseFloat (localStorage.getItem('moltiplicatoreinput'))) {
    moltiplicatore = parseFloat (localStorage.getItem('moltiplicatoreinput'))
}else {
    var moltiplicatore = 1.01
}
if(parseFloat (localStorage.getItem('costomoltiplicatoreinput'))) {
    costomoltiplicatore = parseFloat (localStorage.getItem('costomoltiplicatoreinput'))
}else {
    var costomoltiplicatore = 40000
}
if(parseFloat (localStorage.getItem('aumentoinput'))) {
    aumento = parseFloat (localStorage.getItem('aumentoinput'))
}else {
    var aumento = 1
}
if(parseFloat (localStorage.getItem('moltiplicatoreeleinput'))) {
    moltiplicatoreele = parseFloat (localStorage.getItem('moltiplicatoreeleinput'))
}else {
    var moltiplicatoreele = 3
}
if(parseFloat (localStorage.getItem('moltiplicatoreneinput'))) {
    moltiplicatorene = parseFloat (localStorage.getItem('moltiplicatoreneinput'))
}else {
    var moltiplicatorene = 3
}
if(parseFloat (localStorage.getItem('moltiplicatoreproinput'))) {
    moltiplicatorepro = parseFloat (localStorage.getItem('moltiplicatoreproinput'))
}else {
    var moltiplicatorepro = 3
}
if(parseFloat (localStorage.getItem('neutroniinput'))) {
    neutroni = parseFloat (localStorage.getItem('neutroniinput'))
}else {
    var neutroni = 0
}
if(parseFloat (localStorage.getItem('protoniinput'))) {
    protoni = parseFloat (localStorage.getItem('protoniinput'))
}else {
    var protoni = 0
}
if(parseFloat (localStorage.getItem('elettroniinput'))) {
    elettroni = parseFloat (localStorage.getItem('elettroniinput'))
}else {
    var elettroni = 0
}
if(parseFloat (localStorage.getItem('idrogenoinput'))) {
    idrogeno = parseFloat (localStorage.getItem('idrogenoinput'))
}else {
    var idrogeno = 0
}
if(parseFloat (localStorage.getItem('zolfoinput'))) {
    zolfo = parseFloat (localStorage.getItem('zolfoinput'))
}else {
    var zolfo = 0
}
if(parseFloat (localStorage.getItem('elioinput'))) {
    elio = parseFloat (localStorage.getItem('elioinput'))
}else {
    var elio = 0
}
if(parseFloat (localStorage.getItem('carbonioinput'))) {
    carbonio = parseFloat (localStorage.getItem('carbonioinput'))
}else {
    var carbonio = 0
}
if(parseFloat (localStorage.getItem('ossigenoinput'))) {
    ossigeno = parseFloat (localStorage.getItem('ossigenoinput'))
}else {
    var ossigeno = 0
}
//tutte le variabili fine

//tutti i document.getElementById inizio
if(parseFloat (localStorage.getItem('textinput'))) {
    document.getElementById("counter").innerHTML = parseFloat (localStorage.getItem('textinput'))
}else {
    document.getElementById("counter").innerHTML = materia
}
if(parseFloat (localStorage.getItem('moltiplicatoreinput'))) {
    document.getElementById("moltiplicatore").innerHTML = parseFloat (localStorage.getItem('moltiplicatoreinput'))
}else{
    document.getElementById("moltiplicatore").innerHTML = moltiplicatore
}
if(parseFloat (localStorage.getItem('neutroniinput'))) {
    document.getElementById("neutroni").innerHTML = parseFloat (localStorage.getItem('neutroniinput'))
}else{
    document.getElementById("neutroni").innerHTML = neutroni
}


if(parseFloat (localStorage.getItem('elettroniinput'))) {
    document.getElementById("elettroni").innerHTML = parseFloat (localStorage.getItem('elettroniinput'))
}else{
    document.getElementById("elettroni").innerHTML = elettroni
}


if(parseFloat (localStorage.getItem('protoniinput'))) {
    document.getElementById("numeroprotoni").innerHTML = parseFloat (localStorage.getItem('protoniinput'))
}else{
    document.getElementById("numeroprotoni").innerHTML = protoni
}
document.getElementById("counteridrogeno").innerHTML = idrogeno
document.getElementById("carboniocounter").innerHTML = carbonio
document.getElementById("ossigenocounter").innerHTML = ossigeno
document.getElementById("eliocounter").innerHTML = elio
document.getElementById("zolfocounter").innerHTML = zolfo
document.getElementById("countergalassie").innerHTML = galassie
//tutti i document.getElementById fine

//funzione produci per produrre quark cliccando con l'apposito tasto
function produci() {
    materia += moneyonclick
    document.getElementById("counter").innerHTML =  materia
    aumento = aumento * moltiplicatore
    moneyonclick = moneyonclick + aumento
    if(materia >= 1.78e308 | materia == Infinity) {
        materia = 1
        galassie = galassie + 1
        protoni += 50
        neutroni += 50
        elettroni += 50
        document.getElementById("countergalassie").innerHTML = galassie
        document.getElementById("numeroprotoni").innerHTML = protoni
        document.getElementById("neutroni").innerHTML = neutroni
        document.getElementById("elettroni").innerHTML = elettroni
        document.getElementById("counter").innerHTML = materia
        document.getElementById("moltiplicatore").innerHTML = moltiplicatore
    }
    
    
}

//funzione che si occupa della gestione del moltiplicatore
function potenziamoltiplicatore() {
    if(materia > costomoltiplicatore ) {
        materia = materia - costomoltiplicatore
        costomoltiplicatore = costomoltiplicatore * 3
        moltiplicatore = moltiplicatore + 0.01
    document.getElementById("counter").innerHTML = materia
    document.getElementById("moltiplicatore").innerHTML = moltiplicatore
    document.getElementById("numeroprotoni").innerHTML = protoni
    }else{alert("attenzione non hai abbastanza materia, ti serve esattamente " + costomoltiplicatore + " di materia")}
    
}

//funzione che si occupa dell'acquisto dei protoni
function compraprotoni() {
    if(materia > moltiplicatorepro) {
        materia = materia - moltiplicatorepro
        protoni = protoni + 1
        moltiplicatore = moltiplicatore + 0.001
        moltiplicatorepro = moltiplicatorepro * 1.1

    }else {alert("non puoi comprare un protone se non hai almeno " + moltiplicatorepro + " quark")}
    document.getElementById("counter").innerHTML = materia
    document.getElementById("moltiplicatore").innerHTML = moltiplicatore
    document.getElementById("numeroprotoni").innerHTML = protoni
}

//funzione che si occupa dell'acquisto dei neutroni
function compraneutroni() {
    if(materia > moltiplicatorene) {
        materia = materia - moltiplicatorene
        neutroni = neutroni + 1
        moltiplicatore = moltiplicatore + 0.001
        moltiplicatorene = moltiplicatorene * 1.1
    }else{alert("non puoi comprare un neutrone se non hai almeno " + moltiplicatorene + " quark")}
    document.getElementById("counter").innerHTML = materia
    document.getElementById("moltiplicatore").innerHTML = moltiplicatore
    document.getElementById("neutroni").innerHTML = neutroni
}

//funzione che si occupa dell'acquisto degli elettroni
function compraelettroni() {
    if(materia > moltiplicatoreele) {
        materia = materia - moltiplicatoreele
        elettroni = elettroni + 1
        moltiplicatore = moltiplicatore + 0.001
        moltiplicatoreele = moltiplicatoreele * 1.1
    }else{alert("non puoi comprare un elettrone se non hai almeno " + moltiplicatoreele + " quark")}
    document.getElementById("elettroni").innerHTML = elettroni
    document.getElementById("counter").innerHTML = materia
    document.getElementById("moltiplicatore").innerHTML = moltiplicatore
} 
//crafting avanzato
function creaidrogeno() {
    if(protoni >= 1) {
        if(neutroni >= 5) {
            if(elettroni >= 1) {
                protoni = protoni - 1 
                neutroni = neutroni - 5
                elettroni = elettroni - 1
                idrogeno = idrogeno + 1
                moltiplicatore += 0.006
            }else {alert("non te lo puoi permettere")}
        }else {alert("non te lo puoi permettere")}
    }else {alert("non te lo puoi permettere")}
    document.getElementById("moltiplicatore").innerHTML = moltiplicatore
document.getElementById("numeroprotoni").innerHTML = protoni
document.getElementById("neutroni").innerHTML = neutroni
document.getElementById("elettroni").innerHTML = elettroni
document.getElementById("counteridrogeno").innerHTML = idrogeno  
}
function creacarbonio() {
    if(protoni >= 6) {
        if(neutroni >= 6) {
            if(elettroni >= 6) {
                protoni = protoni - 6
                neutroni = neutroni - 6
                elettroni = elettroni - 6
                carbonio = carbonio + 1
                moltiplicatore = moltiplicatore + 0.017
            }else {alert("non te lo puoi permettere")}
        }else {alert("non te lo puoi permettere")}
    }else {alert("non te lo puoi permettere")}
    document.getElementById("moltiplicatore").innerHTML = moltiplicatore
document.getElementById("numeroprotoni").innerHTML = protoni
document.getElementById("neutroni").innerHTML = neutroni
document.getElementById("elettroni").innerHTML = elettroni
document.getElementById("counteridrogeno").innerHTML = idrogeno
document.getElementById("carboniocounter").innerHTML = carbonio
}
function creaossigeno() {
    if(protoni >= 8) {
        if(neutroni >= 8) {
            if(elettroni >= 8) {
                protoni = protoni - 8
                neutroni = neutroni - 8
                elettroni = elettroni - 8
                ossigeno = ossigeno + 1
                moltiplicatore = moltiplicatore + 0.2
            }else {alert("non te lo puoi permettere")}
        }else {alert("non te lo puoi permettere")}
    }else {alert("non te lo puoi permettere")}
    document.getElementById("moltiplicatore").innerHTML = moltiplicatore
document.getElementById("numeroprotoni").innerHTML = protoni
document.getElementById("neutroni").innerHTML = neutroni
document.getElementById("elettroni").innerHTML = elettroni
document.getElementById("counteridrogeno").innerHTML = idrogeno
document.getElementById("carboniocounter").innerHTML = carbonio
document.getElementById("ossigenocounter").innerHTML = ossigeno
}

function creaelio() {
    if(protoni >= 2) {
        if(neutroni >= 2) {
            if(elettroni >= 2) {
                protoni = protoni - 2
                neutroni = neutroni - 2
                elettroni = elettroni - 2
                elio = elio + 1
                moltiplicatore = moltiplicatore + 0.004
            }else{alert("non te lo puoi permettere")}
        }else{alert("non te lo puoi permettere")}
    }else{alert("non te lo puoi permettere")}
    document.getElementById("moltiplicatore").innerHTML = moltiplicatore
document.getElementById("numeroprotoni").innerHTML = protoni
document.getElementById("neutroni").innerHTML = neutroni
document.getElementById("elettroni").innerHTML = elettroni
document.getElementById("counteridrogeno").innerHTML = idrogeno
document.getElementById("carboniocounter").innerHTML = carbonio
document.getElementById("ossigenocounter").innerHTML = ossigeno
document.getElementById("eliocounter").innerHTML = elio
document.getElementById("zolfocounter").innerHTML = zolfo
}

function creazolfo() {
    if(protoni >= 16) {
        if(neutroni >= 16) {
            if(elettroni >= 18) {
                protoni = protoni - 16
                neutroni = neutroni - 16
                elettroni = elettroni - 18
                zolfo = zolfo + 1
                moltiplicatore = moltiplicatore + 0.42
            }else{alert("non te lo puoi permettere")}
        }else{alert("non te lo puoi permettere")}
    }else{alert("non te lo puoi permettere")}

    document.getElementById("moltiplicatore").innerHTML = moltiplicatore
    document.getElementById("numeroprotoni").innerHTML = protoni
    document.getElementById("neutroni").innerHTML = neutroni
    document.getElementById("elettroni").innerHTML = elettroni
    document.getElementById("counteridrogeno").innerHTML = idrogeno
    document.getElementById("carboniocounter").innerHTML = carbonio
    document.getElementById("ossigenocounter").innerHTML = ossigeno
    document.getElementById("eliocounter").innerHTML = elio
    document.getElementById("zolfocounter").innerHTML = zolfo
}
//fine crafting avanzato
//galassie di quark
if(materia >= 1.78e308 | materia == Infinity) {
    materia = 1
    galassie = galassie + 1
    protoni += 50
    neutroni += 50
    elettroni += 50
    document.getElementById("countergalassie").innerHTML = galassie
    document.getElementById("numeroprotoni").innerHTML = protoni
    document.getElementById("neutroni").innerHTML = neutroni
    document.getElementById("elettroni").innerHTML = elettroni
    document.getElementById("counter").innerHTML = materia
}


//funzioni delle hotkeys
function doc_keyUp(e) {

    
    if (e.key === 'p') {
        
        produci();
    };
    if (e.key === 'm') {
        potenziamoltiplicatore();
    };
    if (e.key === 'z') {
        compraprotoni();
    };
    if (e.key === 'a') {
        compraneutroni();
    };
    if (e.key === 'q') {
        compraelettroni();
    };
    if (e.key === 'i') {
        creaidrogeno();
    };
    if (e.key === 'c') {
        creacarbonio();
    };
    if (e.key === 'o') {
        creaossigeno();
    };
    if (e.key === 'e') {
        creaelio();
    };
    if (e.key === 'l') {
        creazolfo();
    };

}

document.addEventListener('keyup', doc_keyUp, false);


