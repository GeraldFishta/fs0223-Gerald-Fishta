function accendiLuceRossa(){
    document.getElementById("rosso").classList.add("on");
    document.getElementById("giallo").classList.remove("on");
    document.getElementById("verde").classList.remove("on");
}
function accendiLuceGialla(){
    document.getElementById("rosso").classList.remove("on");
    document.getElementById("giallo").classList.add("on");
    document.getElementById("verde").classList.remove("on");
}
function accendiLuceVerde(){
    document.getElementById("rosso").classList.remove("on");
    document.getElementById("giallo").classList.remove("on");
    document.getElementById("verde").classList.add("on");
}

setInterval(function(){
    accendiLuceGialla();
}, 1000)

for (let runner = 0; runner < 10; runner++) {
    setInterval() = {

          

      }
    } 200; //run every 200 milliseconds);
  