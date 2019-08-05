This project was created for a coding challenge I received from pluralsight. The requirements were as follows: 

You suddenly have a curious aspiration to create a package installer that can handle dependencies. You want to be able to give the installer anlist of packages with dependencies, and have it install the packages in order such that an install won’t fail due to a missing dependency.

    The function should accept an array of strings defining packages and their dependencies. Each string contains the name of a package followed by a colon and space then any dependencies required by that package. For simplicity we’ll assume that a package can have at most one dependency.
    
    The function should reject as invalid a dependency specification that contains cycles.

    The function should output a comma separated string of package names in the order of install, such that a package’s dependency will always precede that package.

The packageDependencies file contains comments explaining what my reasons were for each part of the code. 

I have not yet been able to determine how to make all of the tests work. If I have one uncommented at a time, the only one that works is the first one, other wise, my terminal says they are running, but the tests never complete and it never exits on its own. So I left only the first one uncommented so that the test runs and completes.