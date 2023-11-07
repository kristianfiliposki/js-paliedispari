let numero=parseInt(prompt("inserisci numero"));
const numeroPc=parseInt(Math.floor(Math.random()*5));
console.log(numero);

const output=document.getElementById("output");
const output2=document.getElementById("output2");
let somma=(numero+numeroPc);
const btn=document.getElementById("invio");




function calcolator(numero , numeroPc) {
    let pariOdispari=(somma % 2 ===0 );
    
    if(pariOdispari==true){
        console.log("è pari")
    }
    else if(pariOdispari==false){
        console.log("è dispari")
    }
    
    return pariOdispari;
}

btn.addEventListener("click", function(){
    output.innerHTML+=numero;
    output2.innerHTML+=numeroPc;
    calcolator(numero , numeroPc)
})