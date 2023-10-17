import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styles: [
  ]
})
export class ListStudentComponent {


  @Input()
  dataSource: Student[] = []; //se recibe data

  @Output()
  deleteStudent = new EventEmitter<number>();

  @Output()
  editStudent = new EventEmitter<Student>();


  displayedColumns = ['id', 'name', 'lastname', 'age', 'email', 'actions'];

}
