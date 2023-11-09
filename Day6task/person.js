class Person {
    private firstName: string;
    private lastName: string;
    private age: number;
    private address: string;
    private email: string;
    
    constructor(firstName: string, lastName: string, age: number, address: string, email: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.address = address;
      this.email = email;
    }
  
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getAge(): number {
      return this.age;
    }
  
    getAddress(): string {
      return this.address;
    }
  
    getEmail(): string {
      return this.email;
    }
  }
  
  // Example usage:
  const person1 = new Person("John", "Doe", 30, "123 Main St, City", "john.doe@email.com");
  console.log(person1.getFullName());
  console.log(person1.getAge());
  console.log(person1.getAddress());
  console.log(person1.getEmail());
  