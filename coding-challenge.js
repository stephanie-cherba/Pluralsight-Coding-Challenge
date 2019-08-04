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
        if (newArr.length > 2){
            outputString = 'Invalid - Each package must have at most one dependency'
        } else if (newArr[0].indexOf(':') != newArr[0].length -1){
            outputString = 'Invalid - Each package must have a colon and space after, even if it has to dependencies to list'
        } else {
            let firstElement = newArr[0].replace(":", "");
            firstElement = firstElement.replace(" ", "");
            packageArr.push(firstElement);
            dependencyArr.push(newArr[1]);
        }
    }

    //loop through the array of dependencies. Add the packages with no dependencies to the output array first.
    while(outputArr.length < dependencyArr.length){
        for(let i = 0; i < dependencyArr.length; i++){
            let currentPackage = packageArr[i]
            if (dependencyArr[i] === ''){
                let containsPackage = false;
                for(let j = 0; j < outputArr.length; j++){
                    if(outputArr[j] == currentPackage){
                        containsPackage = true;
                    }
                }
                if(containsPackage != true){
                outputArr.push(currentPackage);

                }
            }
        }
        for(let k = 0; k < dependencyArr.length; k++){
            let currentPackage = packageArr[k]
            if (dependencyArr[k] != ''){
                for(let k = 0; k < packageArr.length; k++){
                    if(dependencyArr[k] == packageArr[k]){
                        outputArr.push(packageArr[k]);
                    }
                }
                let containsPackage = false;
                let containsDependency = false;
                for(let l = 0; l < outputArr.length; l++){
                    if(outputArr[l] == currentPackage){
                        containsPackage = true;
                    }
                    if(outputArr[l] == dependencyArr[k]){
                        containsDependency = true;
                        outputArr.push(packageArr[k])
                        console.log(outputArr)
                    }
                }
            }
        }
    }
    if(outputArr.length > 0){
        outputString = outputArr.toString(",  ");
    }
    return outputString;
}

module.exports = packageDependencies;