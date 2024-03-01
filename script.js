var input_ls = '';
var input_cs = '';
var clickedOperator = '';
var currentOperator ='';
var clickedNumber = '';
var operand1 = 0;
var operand2 = 0;

const lastScreen = document.getElementById('last_screen');
const currentScreen =document.getElementById('current_screen');
const btnClear = document.getElementById('btn_clear');
const result = document.getElementById('equals'); 

function clear()
{
    lastScreen.textContent = '';
    currentScreen.innerHTML = 0;
    operand1 =0; 
    operand2 =0; 
    clickedOperator = '';
    currentOperator = '';
    input_cs='';
    input_ls='';

}
 
btnClear.addEventListener('click', ()=> clear());

window.onload = () => 
{
    lastScreen.innerHTML =`<p></p>`;
    currentScreen.innerHTML = `<p>0</p>`;
    operand1 = parseFloat(currentScreen.textContent);
}


var numbers = document.querySelectorAll(".btn.number");
var operators = document.querySelectorAll(".btn.operator");

result.addEventListener('click',() => 
{
    currentOperator = clickedOperator;
    
    if(!(input_ls))
    {
        
        operand1 = parseFloat(input_cs);
        input_ls = input_cs+"=";
        updateLS(input_ls);  
        input_cs ='';      
        
    } 

    else if(input_cs)
    {
        operand2 = parseFloat(input_cs);
        updateLS(operand1.toString()+currentOperator+operand2.toString()+'=');
        operand1 = evaluate(operand1,currentOperator,operand2);        
        updateCS(operand1);
        input_cs ='';                        
    }     
    
});


var myNumber = function()
{
    clickedNumber = this.dataset.number;
    if(!(clickedOperator))
    {
        input_cs += clickedNumber;
        updateCS(input_cs);
    }
    else
    {        
        input_cs += clickedNumber;
        updateCS(input_cs);
    }  
    
}

var myOperator = function()
{
        
    currentOperator = clickedOperator;
    clickedOperator = this.dataset.operator;

    if(!(input_ls))
    {
        operand1 = parseFloat(input_cs);
        input_ls +=input_cs+clickedOperator;
        updateLS(input_ls);  
        input_cs ='';      
        
    } 

    else if(input_cs)
    {
        operand2 = parseFloat(input_cs); 
        operand1 = evaluate(operand1,currentOperator,operand2); 
        input_ls = operand1.toString()+clickedOperator  ;  
        updateLS(input_ls);        
        updateCS(operand1.toString());
        input_cs ='';                        
    }   

    else if(currentOperator != clickedOperator)
    {
        input_ls = operand1.toString()+clickedOperator;  
        updateLS(input_ls); 
          
    }

}

function updateCS(operand)
{
    currentScreen.textContent = operand;

}

function updateLS(input_ls)
{
    lastScreen.textContent = input_ls;    
    
}

for(var i=0; i< numbers.length; i++)
{
    numbers[i].addEventListener('click',myNumber,false)
}

for( var j=0; j< operators.length;j++)
{
    operators[j].addEventListener('click', myOperator, false)
}

function evaluate(op1,a,op2)
{
    switch (a)
    {
        case '÷' : op1/=op2;
        return op1;
        case '-': op1 -= op2;
        return op1;
        case '+':  op1 +=op2;
        return op1;
        case '×': op1*=op2;
        return op1;
       
    }

}

