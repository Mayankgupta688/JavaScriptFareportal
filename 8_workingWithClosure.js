window.a = 10;
window.i = 10;

function Abc() {
    a = 20;
    var b = 20
    console.log(a)
     var ii = 10;

    function Bbc() {
        a = 30 + b;
        console.log(a)
         var iii = 10;

        function Xyz() {
            console.log(ii)
        }
    }

    Bbc();
}

Abc();