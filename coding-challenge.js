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
    //Create separate arrays to hold packages and dependencies and create an array to hold the packages before stringing them together for the output
    let packageArr = [];    
    let dependencyArr = [];
    let outputArr = []
    let outputString = 'Valid';

    //loop through the array passed into the function, splitting each string into the separate packages and dependencies and double check that there are only 2 dependencies and that each package has a colon right after it.
    for(let i = 0; i < arr.length; i++){
        let newArr = arr[i].split(" ");
        outputString = newArr.length > 2 ? 'Invalid - Each package must have at most one dependency' : outputString;
        if (newArr.length > 2){
            outputString = 'Invalid - Each package must have at most one dependency'
        } else if (newArr[0].indexOf(':') != newArr[0].length -1){
            outputString = 'Invalid - Each package must have a colon and space after, even if it has to dependencies to list'
        }
        let firstElement = newArr[0].replace(":", "");
        firstElement = firstElement.replace(" ", "");
        packageArr.push(firstElement);
        dependencyArr.push(newArr[1]);
    }

    //loop through the array of dependencies. Add the packages with no dependencies to the output array first.
    while(outputString === "Valid"){
        console.log('here')
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
    return outputString;
}

module.exports = packageDependencies;