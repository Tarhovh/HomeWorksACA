// 1st. Create an Employee class. Employee should have: 
        //id, firstName, lastName, position, salary, workingHours.

class Employee {
    constructor(id, firstName, lastName, position, salary, workingHours) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._position = position;
        this._salary = salary;
        this._workingHours = workingHours;
      }

      get id() {
        return this._id;
      }

      get firstName() {
        return this._firstName;
      }

      get lastName() {
        return this._lastName;
      }

      get position() {
        return this._position;
      }

      get salary() {
        return this._salary;
      }

      get workingHours() {
        return this._workingHours;
      }

      set id(value) {
        this._id = value;
      }

      set firstName(value) {
        this._firstName = value;
      }

      set lastName(value) {
        this._lastName = value;
      }

      set position(value) {
        this._position = value;
      }

      set salary(value) {
        this._salary = value;
      }

      set workingHours(value) {
        this._workingHours = value;
      }

      getFullName() {

        return `The fullName is '${this._firstName} ${this._lastName}'`
      }

      getAnnularSalary() {
        return `His/her Annual Salary is $${(this.salary)* 12}`
      }

      raiseSalary(percent) {
        return `The new salary after the %${percent} increase is $${+this.salary + this.salary*percent/100}
                and the Annual Salary is $${(+this.salary + this.salary * percent/100)*12}`
      }


}

let employee1 = new Employee(); 

employee1.id = "1";
employee1.firstName = "John";
employee1.lastName = "Wayne";
employee1.position = "Actor";
employee1.salary = "500";
employee1.workingHours = "9-to-5"

console.log(employee1)

console.log(employee1.getFullName())
console.log(employee1.getAnnularSalary())
console.log(employee1.raiseSalary(50))


console.log ("-------End of First-------")