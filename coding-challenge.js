// example input 
// [
//  "KittenService: ",
//  "Leetmeme: Cyberportal",
//  "Cyberportal: Ice",
//  "CamelCaser: KittenService",
//  "Fraudstream: Leetmeme",
//  "Ice: "
// ]


function packageDependencies(arr){
    let packageArr = [];
    let dependencyArr = [];
    let outputString = 'Valid';

    for(let i = 0; i < arr.length; i++){
        let newArr = arr[i].split(" ");
        outputString = newArr.length > 2 ? 'Invalid - Each package must have at most one dependency' : outputString;
        packageArr.push(newArr[0]);
        dependencyArr.push(newArr[1]);
    }

    while(outputString === "Valid"){
        
    }
}

module.exports = packageDependencies;