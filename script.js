
let resultDisplay ="";

let btns = document.querySelectorAll('.button');

Array.from(btns).forEach((b)=>{

    b.addEventListener("click", (e)=>{

        if(e.target.innerHTML == "="){
            if(resultDisplay.length>0){
                resultDisplay = eval(resultDisplay);
                document.getElementById("result").value = resultDisplay ;
            }
            else{
                resultDisplay = "";
                document.getElementById("result").value = resultDisplay ;
            }
            
        }
        else if(e.target.innerHTML == "c"){
            resultDisplay = "";
            document.getElementById("result").value = resultDisplay ;
        }
        else if(e.target.innerHTML == "X"){
            if(resultDisplay.length>0){

                resultDisplay = resultDisplay.slice(0, resultDisplay.length-1);

                document.getElementById("result").value = resultDisplay ;
            }
            else{
                resultDisplay ="";
                document.getElementById("result").value = resultDisplay ;
            }  
        }
        else if(e.target.innerHTML=="%" || e.target.innerHTML=="*"|| e.target.innerHTML=="-" || e.target.innerHTML=="/" || e.target.innerHTML=="+"){
            if(resultDisplay>0){
                resultDisplay = resultDisplay + e.target.innerHTML;
                document.getElementById("result").value = resultDisplay;
            }
        }
        else{
            console.log(e.target);
            resultDisplay = resultDisplay + e.target.innerHTML;
            document.getElementById("result").value = resultDisplay; 
        }
    })
})


  

