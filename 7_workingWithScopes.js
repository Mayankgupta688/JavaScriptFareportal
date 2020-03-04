var a = 10;

function Abc() {
    a = 20;
    console.log(a)

    function Bbc() {
        a = 30;
        console.log(a)
    }

    console.log(a)
    Bbc();
    console.log(a)
}

console.log(a)
Abc()
console.log(a)