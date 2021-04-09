let resultScreen = document.getElementById("dispResult");
let dispStrg = "";
let calcStrg = "";

displayZero();
function displayZero(){
    dispStrg = "";
    calcStrg = "";
    resultScreen.innerHTML = "0";
    console.log("Cleaning screen...");
}

const operators = ['+', '-', '*', '/', 'square', 'Back', 'squareRoot'];

function append(char){

    //Check if operator is used before number
    if(dispStrg == "" && operators.includes(char)){
        displayZero();
        resultScreen.innerHTML = "ERROR<br>(Input a number before operation)";
    }
    
    //Clear Screen
    else if(char == 'AC'){
        displayZero();
        // resultScreen.innerHTML = "0";
    }
    
    else if(char == 'Back'){
        if( dispStrg.length == 1 || dispStrg == "0"){
            displayZero();
        }
        else{
            if( dispStrg.includes('^2') && dispStrg[dispStrg.length - 3] == '^'){
                dispStrg = dispStrg.slice(2,dispStrg.length-4);
                calcStrg = calcStrg.slice(10,calcStrg.length-4);
            }
            else if( dispStrg.includes('^1/2') && dispStrg[dispStrg.length - 5] == '^'){
                dispStrg = dispStrg.slice(2,dispStrg.length-6);
                calcStrg = calcStrg.slice(10,calcStrg.length-6);
            }
            else{
                dispStrg = dispStrg.slice(0,-1);
                calcStrg = calcStrg.slice(0,-1);
            }
            resultScreen.innerHTML = dispStrg;
            console.log("dispStrg: ",dispStrg,", calcStrg: ", calcStrg);
        }
        
    }

    //Perform Operation
    else{

        //Backspace
        
        //Squaring
        if(char == "square"){
            // console("Arrived for Squaring...");
            dispStrg = `((${dispStrg})^2)`;
            calcStrg = `(Math.pow(${calcStrg},2))`;
            
        }
        
        //Square Rooting
        else if(char == "squareRoot"){
            dispStrg = `((${dispStrg})^1/2)`;
            calcStrg = `(Math.pow(${calcStrg},0.5))`;
        }

        //All other operations 
        else{
            dispStrg += char;
            calcStrg += char;
        }

        //Displaying to calcScreen
        resultScreen.innerHTML = dispStrg;
        console.log("dispStrg: ",dispStrg,", calcStrg: ", calcStrg);
    }
}

let result = () => {
    try{
        calcStrg = eval(calcStrg);//If fails goes to catch

        calcStrg = (calcStrg.toFixed(3)).toString();
        dispStrg = calcStrg;
        resultScreen.innerHTML = dispStrg;
        console.log("Solved(dispStrg: ",dispStrg,", calcStrg: ", calcStrg+")");
    }
    catch(error){
        console.log(error);
        resultScreen.innerHTML = "ERROR<br>(Enter valid equation)";
        dispStrg = "";
        calcStrg = "";
    }
}

