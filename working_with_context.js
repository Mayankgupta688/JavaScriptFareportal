var abcd = 10


function abc() {
    getContext()
}
function getContext() {
    console.log(this.abcd)
}

//abc();

var flightData = {
    
    calculateCrewCount: function calculateCrewCount() {
        console.log("Crew Count: " + this.crewList.length)
        console.log("Name: " + this.name)
    },
    name: "A1000",
    code: 10,
    crewList: [{
        name: "X",
        id: 1
    }, {
        data: 257817
    }],
}

flightData.calculateCrewCount()