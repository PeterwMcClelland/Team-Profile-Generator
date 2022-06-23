const Intern = require('../lib/Intern');
 
test('Intern object', () => {
    const intern = new Intern('Sarah', 3);
    expect(intern.name) .toEqual(expect.any(String));
});

test('Intern role', () => {
    const intern = new Intern('Sarah', 3);
    expect(intern.getRole()).toEqual("Intern");
});