
function con(){
    var t = document.getElementById("SAL").value;
    
    var hra = t*0.5;
    document.getElementById("f").innerText = hra;

    var da = t*0.2;
    document.getElementById("d").innerText = da;

    var ta = t*0.3;
    document.getElementById("t").innerText = ta;

    var ma = t*0.4;
    document.getElementById("m").innerText = ma;
}