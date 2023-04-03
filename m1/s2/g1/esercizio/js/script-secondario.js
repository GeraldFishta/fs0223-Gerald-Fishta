var test = prompt ("Miglior Final Fantasy a cui hai giocato, scriverlo in numeri romani ovviamente");

if( test=="FFVII"){
    document.write("Ben detto!");
}else if(test=="FFIX"){
    document.write("quasi, ma sai che sono VII e VIII");
}else{
    document.write("non diciamo cazzate, grazie.");
}

var form = document.getElementById('formTest');  

function risultatiForm (Test){
    var inputValue = formTest.inputbox.value;
    alert ("hai scritto" + inputValue);
}

//svolgimento del form, !!!in corso!!!

var form = document.getElementById('subscribe');  
