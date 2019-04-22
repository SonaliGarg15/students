import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryfilter'
})
export class CategoryfilterPipe implements PipeTransform {

  transform(students: any, selected: any): any {
     // if no category is selected by the user, return all the students
    if (selected === undefined) {
      return students;
    }
    
    // filter the students on the basis of the category selected
    return students.filter(function(student){
      return student.category === selected;
    })
  }

}
