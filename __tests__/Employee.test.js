const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('Sam', 1);
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
});

test('employee name', () => {
    const employee = new Employee('Sam', 1);
    expect(employee.getName()).toEqual(expect.any(String));
});

test('employee ID', () => {
    const employee = new Employee('Sam', 1);
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('employee role', () => {
    const employee = new Employee('Sam', 1);
    expect(employee.getRole()).toEqual("Employee");
}); 