import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }



  getStudents(): Student[] {
    return [
      {
        id: 1,
        name: 'Lucas',
        lastname: 'Ludu',
        age: 30,
        email: 'lucas@gmail.com'
      }
    ];
  }

}
