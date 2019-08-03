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
        if (newArr.length > 2){
            outputString = 'Invalid - Each package must have at most one dependency'
        } else if (newArr[0][newArr.length -1] != ':' || newArr[0].indexOf(':') != newArr[0].length -1){
            outputString = 'Invalid - Each package must have a colon and space after, even if it has to dependencies to list'
        }
        let firstElement = newArr[0].pop();
        debug(firstElement);
        packageArr.push(newArr[0]);
        dependencyArr.push(newArr[1]);
    }

    while(outputString === "Valid"){
        let index = 0;
        let firstPackage;
        for(let i = 0; i < dependencyArr.length; i++){
            if (index = i){
                for(let y = 0; y < packageArr.length; y++){
                    if(packageArr[y] === dependencyArr[i]){

                    }
                }
            }
        }
    }
}

module.exports = packageDependencies;