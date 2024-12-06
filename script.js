const Display= document.getElementById("display");

function showdisplay(input){
    Display.value += input;
}

function abid(){
    Display.value = "";
}
function calculatedisplay(){
    try{
        Display.value = eval(Display.value);
    } 
    catch(error){
        Display.value = "Error";
    }
}