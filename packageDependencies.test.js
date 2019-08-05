const packageDependencies = require('./packageDependencies');

describe('sorting packages', () => {
    it('should output list', () => {
        expect(packageDependencies(["KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: Leetmeme", "Ice: "])).toBe("KittenService,Ice,Cyberportal,CamelCaser,Leetmeme,Fraudstream");
    });
    // it('should output colon error', () => {
    //     expect(packageDependencies(["KittenService ", "Leetmeme: Cyberportal"])).toBe("Invalid - Each package must have a colon and space after, even if it has no dependencies to list");
    // });
    // it('should output dependency error', () => {
    //     expect(packageDependencies(["KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: ", "Ice: Leetmeme"])).toBe("Invalid - Dependecies must not create a cycle or loop");
    // });
    // it('should output multiple dependencies error', () => {
    //     expect(packageDependencies(["KittenService:", "Leetmeme: Cyberportal", "Cyberportal: Ice, KittenService", "CamelCaser: KittenService", "Fraudstream: Leetmeme", "Ice: "])).toBe('Invalid - Each package must have at most one dependency')
    // });
});


