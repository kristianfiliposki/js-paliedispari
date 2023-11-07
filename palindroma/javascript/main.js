const input=document.getElementById("input");
const invio=document.getElementById("invio");
let output=document.getElementById("output");
let output2=document.getElementById("output2");

invio.addEventListener("click",function(){
    
    
    let words=input.value;
    output.innerHTML=words;
    
    let i = words.length-1
    while ( i >= 0 ) {
        let Ncharacter = words[i];
        i--;
        console.log(Ncharacter)
        output2.innerHTML+=Ncharacter
    }   
    function Palindroma (output, output2){
        let valid=(output2.innerHTML==output.innerHTML)
        
        if (valid==true){
            console.log ("è palindroma")
        } 
        
        else if(valid==false) {
            console.log ("non è palindroma")
        }
        return valid;
     } 
    Palindroma (output, output2)

 })


 
