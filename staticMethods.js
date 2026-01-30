class Employee {
  static employeeCount = 0;
  constructor(name) {
    this.name = name;
    Employee.employeeCount++;
  }
  //static methods and properties exists on class not on the objects
  static getNewInter(name) {
    return {
      name,
      role: "intern",
      date: new Date().toDateString(),
    };
  }

  static getEmployeeCount() {
    return Employee.employeeCount;
  }
}

console.log(Employee.getNewInter("Vivek"));

const emp1 = new Employee("v1");
const emp2 = new Employee("v2");
console.log(Employee.getEmployeeCount());
