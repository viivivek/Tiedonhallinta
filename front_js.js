async function hae_summalla_ostaneet(){
    console.log("hae summalla ostaneet funktio")
    const summa_input = document.getElementById("ostosumma")
    const summa = summa_input.value
    console.log(summa)
    try{
        const vastaus = await fetch('http://localhost:3000/toimittaneet_yritykset/'+summa)
        const data = await vastaus.json();
        console.log(data)
        teeTaulukkoYrityksista(data)
    }
    catch (error){
        console.log(error)
    }
}
function teeTaulukkoYrityksista(jsonYritykset){
    let htmlTaulukko = "<tr><td>Yrityksen nimi</td><td>Toimitussumma</td></tr>"
    for (let i = 0; i < jsonYritykset.length; i++){
        let yritys = jsonYritykset[i][0]
        let summa = jsonYritykset[i][1]
        htmlTaulukko = htmlTaulukko + "<tr><td>"+yritys+"</td><td>"+summa+"</td></tr>"
    }
    document.getElementById("isolla_toimittaneet_yritykset").innerHTML = htmlTaulukko
}
async function haeToimialat(){
    const vastaus = await fetch('http://localhost:3000/toimialat')
    const jsonToimialat = await vastaus.json()
    console.log(jsonToimialat)
    taytaVetolaatikko(jsonToimialat)
}
function taytaVetolaatikko(jsonToimialat){
    let htmlVetolaatikko = ""
    for (let i = 0; i < jsonToimialat.length; i++){
        let toimiala = jsonToimialat[i]
        htmlVetolaatikko = htmlVetolaatikko + "<option>" + toimiala + "</option>"
    }
    document.getElementById("toimialat").innerHTML = htmlVetolaatikko
}
haeToimialat()
const hae_ostaneet_button = document.getElementById("summalla_ostaneet")
hae_ostaneet_button.addEventListener('click', hae_summalla_ostaneet)