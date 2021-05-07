var keys = document.getElementsByClassName('keys');
var display = document.getElementById('display');
var operand1 = null;
var operand2 = null;
var operator = null;


function calc(){
    var  value = this.getAttribute('data-value');
    if (value=='+'){
        operator = "+";
        operand1 = parseFloat(display.textContent);
        display.innerText = '';
    }
    else if( value == '-'){
        operator = "-";
        operand1 = parseFloat(display.textContent);
        display.innerText = '';
    }
    else if( value == '/'){
        operator = "/";
        operand1 = parseFloat(display.textContent);
        display.innerText = '';
    }
    else if( value == '*'){
        operator = "*";
        operand1 = parseFloat(display.textContent);
        display.innerText = '';
    }
    else if( value == '%'){
        operator = "%";
        operand1 = parseFloat(display.textContent);
        res = operand1/100;
        display.innerText = res;
    }
    else if( value=='='){
        operand2 = parseFloat(display.textContent);
        var res = eval(operand1+operator+operand2);
        if (res=='Infinity'){
            display.innerText = 'Error';
        }
        else{
            display.innerText = res;
        }
    }
    else if( value == 'AC'){
        display.innerText = '';
    }
    else if( value == '+/-'){
        var sign = display.textContent;
        if (sign>0){
            sign = -sign;
            display.innerText = sign;
        }
        else{
            sign = -sign;
            display.innerText = sign;
        }
    }
    else{
        display.innerText += value;
    }
}



for(var i =0;i<keys.length;i++){
    keys[i].addEventListener('click',calc);
}

function keyboard(event){
    var input = event.keyCode;
    console.log(input);
    var nums = String.fromCharCode(input);
    if (input==8){
        display.innerText = '';
    }
    else if(event.shiftKey && input==187){
        operator = "+";
        operand1 = parseFloat(display.textContent);
        display.innerText = '';
    }
    else if(event.shiftKey && input==56){
        operator = "*";
        operand1 = parseFloat(display.textContent);
        display.innerText = '';
    }
    else if(input==191){
        operator = '/';
        operand1 = parseFloat(display.textContent);
        display.innerText = '';
    }
    else if(input==189){
        operator = '-';
        operand1 = parseFloat(display.textContent);
        display.innerText = '';
    }
    else if(input==13 || input==187){
        operand2 = parseFloat(display.textContent);
        var res = eval(operand1+operator+operand2);
        if (res=='Infinity'){
            display.innerText = 'Error';
        }
        else{
            display.innerText = res;
        }
    }
    display.innerText += nums;
}

document.addEventListener('keydown',keyboard);