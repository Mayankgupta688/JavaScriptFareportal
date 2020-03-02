var emp = {
    name: null,
    age: "Y"
};

delete emp;

function Abc() {
    var a = 10;
    delete a;
    console.log(a)
}

Abc();