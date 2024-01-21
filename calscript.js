
const nums = document.getElementsByClassName("num");
const operation = document.querySelectorAll("#operations")
const addbtn = document.querySelector(".add");
const subbtn = document.querySelector(".substract");
const dividebtn = document.querySelector(".divide");
const multibtn = document.querySelector(".multiply");
const equals = document.querySelector(".equal");




function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

//main function of the programm;
function operator(firstNum, secondNum, operator){
    if(operator === "+"){
        return add(firstNum, secondNum);
    }
    else if(operator === "-"){
        return subtract(firstNum, secondNum);
    }
    else if(operator === "*"){
        return multiply(firstNum, secondNum);
    }
    else if(operator === "/"){
        return divide(firstNum, secondNum);
    }
}



let currentInput = "";

for(let i=0; i < nums.length; i++){
    nums[i].addEventListener('click', function(){
        currentInput += this.textContent;
        display();
        console.log(this)
    })
}

function display(){
    const screen = document.querySelector("#screen");
    screen.textContent = currentInput;        
}


