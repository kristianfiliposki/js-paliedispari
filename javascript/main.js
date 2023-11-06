const input=document.getElementById("input");
const invio=document.getElementById("invio");
let output=document.getElementById("output");
let output2=document.getElementById("output2");

invio.addEventListener("click",function(){
    
    let words=input.value;
    output.innerHTML=words;

    let i = words.length
    while ( i >= 0 ) {
        let Ncharacter = words[i];
        i--;
        console.log(Ncharacter)
        output2.innerHTML+=Ncharacter
    }   

/*     function Palindroma (){
        
        if (output==output2) {
            console.log("è palindroma")
        }
        else(
            console.log("Non è palindroma")
        )
        
     }  */
 })


 
