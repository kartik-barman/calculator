function DeleteMe () {
    document.getElementById("myResults").value = "";
    }
    function backSpace () {
        var a = document.getElementById("myResults").value ;
        document.getElementById("myResults"). value=a. substring(0, a. length -1) ;
    }
   function calculator(e) {
document.getElementById("myResults").value += e;
    }
   function answer (){
    var x = document.getElementById("myResults").value ;
    var y = eval(x) ;
    document.getElementById("myResults").value = y ;
   }
