(function() {
    

    debugger;
    OuterFunction();

    function OuterFunction() {
        debugger;
        var a = 10;
        var b = 20;

        helloWorld();

        function helloWorld() {
            console.log("Hello World")
        }
    }
})()