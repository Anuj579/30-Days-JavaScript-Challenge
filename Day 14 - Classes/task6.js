class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    static studentCount = 0;

    constructor(id, name, age) {
        super(name, age);
        this.id = id;

        Student.studentCount++
    }
    static logStudentCount(){
        console.log(`Total numbers of Students: ${Student.studentCount}`);
    }
}

const s1 = new Student(1 , "Anuj", 19)
const s2 = new Student(2 , "Arav", 20)
const s3 = new Student(3 , "Shubham", 21)

Student.logStudentCount()