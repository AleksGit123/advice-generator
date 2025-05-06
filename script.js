"use strict"
let generadeBtn = document.querySelector(".generate_btn");
let advice = document.querySelector(".advices");
let adviceID = document.querySelector(".advice_id");
let lastAdvice = "";
// send request function

let getAdvice = function(){
 

}

generadeBtn.addEventListener("click", ()=>{
    let request = new XMLHttpRequest();
    request.open("GET", "https://api.adviceslip.com/advice");
    request.send();
      
    request.addEventListener("load", () =>{
    
        let data = JSON.parse(request.responseText);
        let currentAdvice = data.slip.advice;
        let adviceIDNum = data.slip.id;
        console.log(adviceIDNum)
        console.log(currentAdvice);
        if(currentAdvice !== lastAdvice){
            lastAdvice = currentAdvice;
            advice.innerHTML = currentAdvice;
            adviceID.innerText = adviceIDNum;
        }
        else{
            advice.innerHTML = "Same advice. Do it again"
        }
         
    });

    
});


