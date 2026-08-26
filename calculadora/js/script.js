const display = document.getElementById("display");
//entrada
function appendToDisplay(input){
    display.value += input;
}
//processamento
function calculate(input){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = "Error"
    }
    
}
//saida
function clearDisplay(input){
    display.value += "";
    
}