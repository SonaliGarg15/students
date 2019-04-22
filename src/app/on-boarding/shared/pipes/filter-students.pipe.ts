import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStudents'
})
export class FilterStudentsPipe implements PipeTransform {

  transform(students: any, term: any): any {
    // if nothing is entered by the user, return all the students
    if(term === undefined) return students;
    // filter the students on the basis of the term searched by the user
    return students.filter(function(student){ 
      return student.studentName.toLowerCase().includes(term.toLowerCase());
    })
  }

}
