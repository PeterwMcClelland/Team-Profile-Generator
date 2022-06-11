const Engineer = require('../lib/Engineer');
 
test('Engineer object', () => {
    const engineer = new Engineer('Joe', 2);
    expect(engineer.name) .toEqual(expect.any(String));
});

test('Employee role', () => {
    const engineer = new Engineer('joe', 2);
    expect(engineer.getRole()).toEqual("Engineer");
});