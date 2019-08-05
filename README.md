This project was created for a coding challenge I received from pluralsight. The requirements were as follows and there are some notes afterwards for both Pluralsight hiring managers to look at as well as whoever else might be reading this: 

You suddenly have a curious aspiration to create a package installer that can handle dependencies. You want to be able to give the installer anlist of packages with dependencies, and have it install the packages in order such that an install won’t fail due to a missing dependency.

    The function should accept an array of strings defining packages and their dependencies. Each string contains the name of a package followed by a colon and space then any dependencies required by that package. For simplicity we’ll assume that a package can have at most one dependency.
    
    The function should reject as invalid a dependency specification that contains cycles.

    The function should output a comma separated string of package names in the order of install, such that a package’s dependency will always precede that package.