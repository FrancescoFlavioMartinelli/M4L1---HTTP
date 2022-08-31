// let prodotti = []
function creaCards(prodotti){
    console.log("CREAZIONE CARDS");
    prodotti.forEach((e)=>{
        let card = document.createElement("h1")
        card.innerHTML = e.name
        document.body.append(card)
    })
}

//HTTP
/*
    Le chiamate HTTP ci permettono di inviare e ricevere dei dati contattando delle risorse esterne

    chiamata HTTP -> esecuzione asincrona
    
    - Possono fallire
    - Possono richiedere un tempo indefinito

    Queste sono problematiche enormi nella programmazione perchè non possiamo restare ad aspettare un tempo indefinito per andare avanti con l'esecuzione
*/

console.log("INIZIO");

//CREARE HTTP REQUEST
//1 - creare una variabile Request
let httpReq = new XMLHttpRequest();
//2 - impostare la risorsa da aprire
// httReq.open(METHOD, URL)
httpReq.open("GET", "http://jsonplaceholder.typicode.com/users");
//3 - impostare la callback (ovvero cosa fare quando lo status cambia)
httpReq.onreadystatechange = (res)=>{
    //Che cosa fare quando lo status cambia (ci arriva la risposta)
    console.log("STATUS CHANGED", res.target);
    // console.log(res.target); //res.target sarà la response
    if(res.target.status == 200 && res.target.readyState == 4) {
        console.log(res.target.response);
        let result = JSON.parse(res.target.response)
        console.log(result);
        
        //QUA CHIAMO LA FUNZIONE DA ESEGUIRE CON I RISULTATI
        creaCards(result)


        console.log("FINE CHIAMATA");
    }
}

//4 - inviare la request
httpReq.send()

//Dopo aver eseguito .send() la richiesta è partita ed è gestita asincronamente, il resto del codice va avanti senza aspettare che termini
console.log("FINE");