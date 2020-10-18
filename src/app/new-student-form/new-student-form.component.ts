import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../student.service'

@Component({
  selector: 'app-new-student-form',
  templateUrl: './new-student-form.component.html',
  styleUrls: ['./new-student-form.component.css']
})
export class NewStudentFormComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() contactEmail: string;

  constructor(private _myService: StudentService) { }
  onSubmit(){
    console.log("You submitted: " + this.firstName + " " + this.lastName + " " 
    + this.contactEmail);
    this._myService.addStudents(this.firstName ,this.lastName , this.contactEmail);
  }
  
  ngOnInit(): void {
  }

}
