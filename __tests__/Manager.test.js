const Manager = require('../lib/Manager');
 
test('Manager object', () => {
    const manager = new Manager('Zach', 4);
    expect(manager.name) .toEqual(expect.any(String));
});

test('Intern role', () => {
    const manager = new Manager('Zach', 4);
    expect(manager.getRole()).toEqual("manager");
});