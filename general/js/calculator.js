let screen=document.getElementById("result");

function display(num){
    screen.value=screen.value+num
}

function equal(){
    try{
        screen.value=eval(screen.value)
    }
    catch{
        alert("invalid")
    }
}
function del(){
    screen.value=screen.value.slice(0,-1)

}
let clear=document.getElementById("clear")
clear.addEventListener("click",function(){
    screen.value=""
})

function onlynumbers(e){
    var x=e.which||e.keyCode
    if(x>=48 && x<=57)
    {
        return true
    }else
    {
        alert("only numbers are allowed")
        return false
    }
}