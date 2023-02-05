function DeleteMe () {
    document.getElementById("myResult").value = "";
}
function calculator (e) {
    document.getElementById('myResult').value += e;
}

function answer () {
    var a = document.getElementById('myResult').value ;
    var b = eval(a);
    document.getElementById('myResult').value = b ;
}