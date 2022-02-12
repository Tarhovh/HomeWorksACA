// 4th

class Person {
    constructor(firstName, lastName, gender, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
    }

    get firstName () {
        return this._firstName;
    }

    get lastName () {
        return this._lastName;
    }

    get gender () {
        return this._gender;
    }

    get age () {
        return this._age;
    }

    set firstName (value) {
        this._firstName = value;
    }

    set lastName(value) {
        this._lastName = value;
    }

    set gender(value) {
        this._gender = value;
    }

    set age(value) {
        this._age = value;
    }

    toString() {
        return `Firstname: ${this._firstName}, Lastname: ${this._lastName}, 
                Gender: ${this._gender}, Age: ${this._age}`
    };
}


class Student extends Person {
    constructor(program, year, fee) {
        super();

        this._program = program;
        this._year = year;
        this._fee = fee;
    }

    get year() {
        return this._year;
    }

    set year (value) {
        this._year = value
    }

    get program () {
        return this._program
    }

    set program(values) {
        this._program = values
    }

    passExam(program, grad) {

        for (var key in program) {
            if (program.hasOwnProperty(key)) {
               let len = Object.values(program[key]).length;
               let studentExams = Object.values(program[key])

               const sum = studentExams.reduce((a, b) => a + b, 0)

               grad = (sum / len)
                
                    if (grad >= 50) {
                        return `The Student passed to the ${this._year += 1} academic year`;
                    }
            }
        }

        return `The Student stays in ${this._year} academic year`;

    };

    toString() {
        return `student's name: ${this._firstName + ' ' + this._lastName}, Age: ${this._age},
        Gender: ${this._gender}. He/she studies in ${this._year} year.`
    }


}

let student1 = new Student();

student1._year = new Date().getFullYear()

student1._program = [
    {
        Math: 80,
        Geography: 50,
        History: 30,
    }
]

console.log(student1.passExam(student1._program))

student1._firstName = "Karen";
student1._lastName = "Morrison";
student1._gender = "Female";
student1._age = 21;
student1._fee = `$1500`;


console.log(student1)
console.log(student1.toString())

class Teacher extends Person {
    constructor (program, pay) {
        super();
        this._program = program;
        this._pay = pay;
    }

    get program () {
        return this._program
    }

    get pay () {
        return this._pay;
    }

    set program (values) {
        this._program = values
    }

    set pay (value) {
        this._pay = value;
    }

    toString () {
        return `The Teacher's name: ${this.firstName + ' ' + this.lastName},
              Age:      ${this.age},
              Gender:   ${this.gender},
              Salary:   ${this.pay},
              Programm: ${this.program}
        `
    }


}

let teacher1 = new Teacher();
teacher1.program = "Geography, History";
teacher1.pay = '$500';
teacher1._firstName = 'John';
teacher1.lastName = "Doe";
teacher1.gender = "Male";
teacher1.age = 45;

console.log(teacher1.toString())



console.log ("-------End of 4th-------")