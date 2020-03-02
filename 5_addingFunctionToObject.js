function calculateCrewCount() {
    console.log("Crew Count: " + this.crewList.length)
    console.log("Name: " + this.name)
}

var flightData = {

calculateCrewCount: calculateCrewCount,
name: "A1000",
code: 10,
crewList: [{
    name: "X",
    id: 1
}, {
    data: 257817
}],
}

var crewData = {
calculateCrewCount: calculateCrewCount,
crewList: [{
    name: "X",
    id: 1
}]
}

crewData.calculateCrewCount()

