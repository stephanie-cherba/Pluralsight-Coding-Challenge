const packageDependencies = require('./packageDependencies');

test('sorting packages', () => {
    expect(packageDependencies(["KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: Leetmeme", "Ice: "])).toBe("KittenService, Ice, Cyberportal, Leetmeme, CamelCaser, Fraudstream");
})

test('invalid packages', () => {
    expect(packageDependencies(["KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: ", "Ice: Leetmeme"])).toBe("Invalid");
})