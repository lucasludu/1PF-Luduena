import { Component } from '@angular/core';
import { Student } from './models/student';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from './services/student.service';
import { FormStudentComponent } from './components/form-student/form-student.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  students: Student[] = [];


  constructor(
    private matDialog: MatDialog,
    private studentService: StudentService
  ) {
    this.students = this.studentService.getStudents();
  }

  openStudentDialog(): void {
    this.matDialog
      .open(FormStudentComponent)
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (v) {
            this.students = [
              ...this.students,
              {
                ...v,
                id: new Date().getTime(),
              },
            ];
          }
        },
      });
  }

  onEditStudent(student: Student): void {
    this.matDialog
    .open(FormStudentComponent, {
      data: student,
    })
    .afterClosed()
    .subscribe({
      next: (v) => {
        if (!!v) {
          this.students = this.students.map((u) =>
            u.id === student.id ? { ...u, ...v } : u
          );
        }
      },
    });
  }

  onDeleteStudent(studentId: number): void {
    if (confirm('Esta seguro que desea eliminar al estudiante?')) {
      this.students = this.students.filter((u) => u.id !== studentId);
    }
  }


}
