function sumador() {
    var sumandos = document.getElementById("op").innerHTML;
    var a = sumandos.split("+");
    var resultado = document.getElementById("res");
    resultado.innerHTML = "= " + (parseInt(a[0]) + parseInt(a[1]));
    
}

function suma(){
        var sumandos = document.getElementById("op");
        sumandos.innerHTML = Math.floor(Math.random()*10)+ " + " + Math.floor(Math.random()*10);
        var resultado = document.getElementById("res");
        resultado.innerHTML = "";
}
