let res = document.querySelector('#res');
let btn0 = document.querySelector('#btn0');
let btn1 = document.querySelector('#btn1');
let btnClr = document.querySelector('#btnClr');
let btnEql = document.querySelector('#btnEql');
let btnSum = document.querySelector('#btnSum');
let btnSub = document.querySelector('#btnSub');
let btnMul = document.querySelector('#btnMul');
let btnDiv = document.querySelector('#btnDiv');

let operand1 = 0;
let operand2 = 0;
let operator = '';
let eqn = "";
let result = 0;


function displayRes (eq){
    res.innerHTML = eq;
}

function splitOperand (op) {
    eqn += op;
    displayRes(eqn);
}

//0 and 1 click
btn0.addEventListener("click",function(){
    eqn += '0';
    displayRes(eqn);
});

btn1.addEventListener("click",function(){
    eqn += '1';
    displayRes(eqn);
});



// = Pressed
btnEql.addEventListener("click", function(){
    lst = eqn.split(operator);
    operand1 = parseInt(lst[0]);
    operand2 = parseInt(lst[1]);
    operand1 = parseInt(operand1, 2);
    operand2 = parseInt(operand2, 2);
    // console.log(`operand: ${operand1}, operand2: ${operand2}`);
        switch(operator){
        case '+':
            result = operand1 + operand2;
            // console.log(result);
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        default:
            break;
    }
    // console.log(result.toString(2));
    res.innerHTML = result.toString(2);
    result = 0;
});

// C presser
btnClr.addEventListener("click",function(){
    // console.log('Clear Pressed!');
    eqn = "";   
    res.innerHTML = eqn;
});



// = presser


//Operator click
btnSum.addEventListener("click", function(){
    operator = '+';
    splitOperand(operator);
});

btnSub.addEventListener("click", function(){
    operator = '-';
    splitOperand(operator);
});

btnMul.addEventListener("click", function(){
    operator = '*';
    splitOperand(operator);
});

btnDiv.addEventListener("click", function(){
    operator = '/';
    splitOperand(operator);
});