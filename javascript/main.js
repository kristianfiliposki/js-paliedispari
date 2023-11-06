const input=document.getElementById("input");
const invio=document.getElementById("invio");
let output=document.getElementById("output");

invio.addEventListener("click",function(){
    
    let words=input.value;
    output.innerHTML+=words
    for (let i = words.length; i >= 0; i--) {
        const Ncharacter = words[i];
        console.log(Ncharacter)
    }
 })


 function Palindroma (){
    
    

 }
