(function() {

    function returnEmployeeData() {
        var empname = "X";
        var empCode = "10";
        var empAddress = "Delhi";

        function getDetails() {
            console.log(empCode)
        }

        return {
            sjfdbfdsj: empname,
            getDetails: getDetails
        }
    }

    var data = returnEmployeeData();

    console.log(data.empCode);

})()