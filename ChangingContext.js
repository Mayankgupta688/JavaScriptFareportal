(function() {

    var myDetails = {
        name: "XY",
        age: 10
    }
    

    var myOtherDetails = {
        name: "XYZ",
        age: 10,
        
    }
    

    var name123 = "X";

    function getName() {
        debugger;
        console.log(this.name123)
    }

     getName.call(myDetails);
     getName.call(myOtherDetails);

})()