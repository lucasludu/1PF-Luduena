export class Student {
    id: number;
    name: string;
    lastname: string;
    age: number;
    email: string;


    constructor(id: number, name: string, lastname: string, age: number, email: string) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.email = email;
    }
}
