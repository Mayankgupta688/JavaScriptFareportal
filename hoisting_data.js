debugger;
function abc() {
    aaaa = 20

    hoisting1()
    
    hoisting1 = function() {
        console.log(aaaa)
        var aaaa = 10;
        console.log(aaaa)
    }


    console.log(aaaa);
}

abc();

function AlertA() {
    debugger;
    alert(aaaa)
}

AlertA()

var aaaa;