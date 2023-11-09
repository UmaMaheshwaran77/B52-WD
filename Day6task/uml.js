class Student {
    private studentID: number;
    private firstName: string;
    private lastName: string;
    private age: number;
  
    constructor(studentID: number, firstName: string, lastName: string, age: number) {
      this.studentID = studentID;
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    study(): void {
      console.log(`${this.firstName} is studying.`);
    }
  
    introduce(): string {
      return `My name is ${this.firstName} ${this.lastName}, and I am ${this.age} years old.`;
    }
  }
  
  // Example usage:
  const student1 = new Student(1, "John", "Doe", 20);
  student1.study();
  console.log(student1.introduce());
  