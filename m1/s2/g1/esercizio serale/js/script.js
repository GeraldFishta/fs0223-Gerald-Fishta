
function accendi(){
    var lampadina = document.getElementById("bulbo");
    lampadina.style.backgroundColor =  "yellow";
}

function spegni(){
    var lampadina = document.getElementById("bulbo");
    lampadina.style.backgroundColor = "grey";
}

function alterna(){
    var lampadina = document.getElementById("bulbo");
    var colore = lampadina.style.backgroundColor;

    
    if(colore == ""){
        lampadina.style.backgroundColor = "yellow"
    }else{
        lampadina.style.backgroundColor = ""
    }

}