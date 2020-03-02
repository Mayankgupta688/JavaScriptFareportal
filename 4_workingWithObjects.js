// Dynamic Key Access
var keyToAccess = "passangerLimit";

var flightDetails = {
    flightNumber: 10,
    flightName: "Air Asia",
    [keyToAccess]: 100,
    [getKey()] : true
};

delete flightDetails

debugger;
var emp = {};
emp.name = "X";
emp.age = 10;

flightDetails[keyToAccess];
flightDetails.keyToAccess = 100;


console.log(flightDetails.flightNumber);
console.log(flightDetails["flightName"]);

console.log(flightDetails[getKey()])

console.log("Data: " + flightDetails.randomDetails)

function getKey() {
    return "passangerLimit";
}