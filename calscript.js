
const nums = document.getElementsByClassName("num");
const operation = document.querySelectorAll("#operations")
const addbtn = document.querySelector(".add");
const subbtn = document.querySelector(".substract");
const dividebtn = document.querySelector(".divide");
const multibtn = document.querySelector(".multiply");
const equals = document.querySelector(".equal");
const clrbtn = document.querySelector(".clrbtn");

let firstVal = "";
let secondVal = "";
let operatorval = "";





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
function operator(firstNum, operator, secondNum){
    switch(operator){
        case "+":
            return add(firstNum, secondNum)
            break;
        case "-":
            return subtract(firstNum, secondNum)
            break;
        case "*":
            return multiply(firstNum, secondNum)
            break;
        case "/":
            return divide(firstNum, secondNum)
            break;
    }

}




//dislays the first value for calculation
for(let i=0; i < nums.length; i++){
    nums[i].addEventListener('click', function(){
        if(operatorval === ""){
            firstVal += this.textContent;
        }else{
            secondVal += this.textContent;
        } 
        display();
        
    })
}

function display(){
    const screen = document.querySelector("#screen");
    screen.textContent = operatorval === "" ? firstVal : secondVal;       
}

addbtn.addEventListener("click", function(){
    operatorval = addbtn.textContent;


})

subbtn.addEventListener("click", function(){
    operatorval = subbtn.textContent;
})

multibtn.addEventListener("click", function(){
    operatorval = multibtn.textContent;
})

dividebtn.addEventListener("click", function(){
    operatorval = dividebtn.textContent;
})

equals.addEventListener("click", function () {
    if (firstVal !== "" && secondVal !== "" && operatorval !== "") {
        let result = operator(parseFloat(firstVal), operatorval, parseFloat(secondVal));
        firstVal = result.toString();
        secondVal = "";
        operatorval = "";
        display();
    }
});


clrbtn.addEventListener("click", function(){
    firstVal = "";
    secondVal = "";
    operatorval = "";
    display();
})

