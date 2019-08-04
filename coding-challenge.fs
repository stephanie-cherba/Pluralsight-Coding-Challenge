let packageDependencies (arr: array){
    // Create separate arrays to hold packages and dependencies and create an array to hold the packages before stringing them together for the output

    let mutable packageArr : string list = []    
    let mutable dependencyArr : string list = [] 
    let mutable outputArr : string list = [] 
    let mutable outputString : string = 'Valid'

    //loop through the array passed into the function, splitting each string into the separate packages and dependencies and double check that there are only 2 dependencies and that each package has a colon right after it.
    for i = 0 to arr.Length - 1 do
        let mutable newArr : arr[i].Split [|' '|]
        let firstElement = newArr[0].Replace(":", "")
        firstElement = firstElement.Replace(" ", "")
        if newArr.Length > 2 then outputString = 'Invalid - Each package must have at most one dependency'
        | newArr[0].IndexOf(':') != newArr[0].Length -1 then outputString = 'Invalid - Each package must have a colon and space after, even if it has no dependencies to list' 
        | (packageArr <- firstElement :: packageArr) && (dependencyArr <- newArr[1] :: dependencyArr)

    //loop through the array of dependencies. Add the packages with no dependencies to the output array first.
    while outputArr.Length < dependencyArr.Length do
        //loop through dependencyArr to find all packages with no dependencies first
        for i = 0 to dependencyArr.Length -1 do
            let currentPackage = packageArr[i]
            if dependencyArr[i] === '' then 
                let containsPackage = false
                //loop through the outputArr to determing if currentPackage is already and element
                for j = 0 to outputArr.Length -1 do 
                    if outputArr[j] == currentPackage then containsPackage = true

                //if currentPackage is not already an element, then push package into array
                if containsPackage != true then outputArr <- currentPackage :: outputArr)

        //loop through dependencyArr to determine what order in which to add what packages which have dependencies
        for k = 0 to dependencyArr.Length -1 do
            if dependencyArr[k] != '' then
                let containsPackage = false
                let containsDependency = false
                let currentPackage = packageArr[k]
                //loop through outputArr to determine if currentPackage or the current dependency is already an element
                for l = 0 to outputArr.Length -1
                    if outputArr[l] == currentPackage then containsPackage = true
                    if outputArr[l] == dependencyArr[k] then containsDependency = true
                //if the package is not in the outputArr and the dependency is, the currentPackage into the outputArr
                if containsPackage != true && containsDependency == true then outputArr <- currentPackage :: outputArr

    //if there are elements in the outputArr, then turn it into a string before returning it, otherwise just return whatever outputString is
    if outputArr.Length > 0 then outputString = outputArr.ToString(",  ")
    outputString