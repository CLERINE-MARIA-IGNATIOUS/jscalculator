const display=document.getElementById("display");
function dis(input)
{
    display.value+=input;
}  
function ev()
{
    display.value=eval(display.value);
}  
function clearing()
{
    display.value="";
}  