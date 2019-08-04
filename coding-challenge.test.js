const packageDependencies = require('./packageDependencies');

test('sorting packages', () => {
    expect(packageDependencies(["KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: Leetmeme", "Ice: "])).toBe("KittenService, Ice, Cyberportal, Leetmeme, CamelCaser, Fraudstream");
})

test('cycle dependencies', () => {
    expect(packageDependencies(["KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: ", "Ice: Leetmeme"])).toBe("Invalid - Dependecies must not create a cycle or loop");
})

test('packages missing colon', () => {
    expect(packageDependencies(["KittenService ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: Leetmeme", "Ice: "])).toBe('Invalid - Each package must have a colon and space after, even if it has to dependencies to list')
})

test('two dependencies', () => {
    expect(packageDependencies(["KittenService:", "Leetmeme: Cyberportal", "Cyberportal: Ice, KittenService", "CamelCaser: KittenService", "Fraudstream: Leetmeme", "Ice: "])).toBe('Invalid - Each package must have at most one dependency')
})
