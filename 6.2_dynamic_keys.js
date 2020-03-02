var empObj = {
    name: "Mayank",
    age: 1
};

Object.defineProperty(empObj, "salary", {
    value: {
        ageInfo: 50
    },
    writable: false
})

empObj.salary = {
    salaryInfo: 121
}

console.log(empObj.salary)