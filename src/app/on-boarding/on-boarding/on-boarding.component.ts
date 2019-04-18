import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { DocumentValidator } from '../shared/validators/document.validator';
import { categories, documents, CATEGORIES, DOMESTIC_MANADATORY_DOCUMENTS, INTERNATIONAL_MANADATORY_DOCUMENTS } from '../shared/constants';
import { OnBoardingService } from '../shared/services/on-boarding.service';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.css']
})
export class OnBoardingComponent implements OnInit {
  onBoardingForm: FormGroup;  
  categories = categories;
  documents = documents;

  constructor(private formBuilder: FormBuilder, public onBoardingService: OnBoardingService) { }

  ngOnInit() {
    const formControls = this.documents.map(control => new FormControl(false));
    this.onBoardingForm = this.formBuilder.group({
      studentName: ['', Validators.required],
      category: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      fathersName: ['', Validators.required],
      mothersName: ['', Validators.required],
      lastClassScore: ['', Validators.required],
      documents: new FormArray(formControls)},
       { validator: DocumentValidator });

      this.onBoardingForm.get('category').valueChanges
      .subscribe(checkedValue => {
        const category = this.onBoardingForm.get('category');
        if(category.value === CATEGORIES.International){
          for (let index = 0; index < INTERNATIONAL_MANADATORY_DOCUMENTS.length; index++) {
            documents[INTERNATIONAL_MANADATORY_DOCUMENTS[index]].mandatory = true;            
            }
        }
        if(category.value === CATEGORIES.Domestic){
          for (let index = 0; index < 6; index++) {
            if(DOMESTIC_MANADATORY_DOCUMENTS.includes(index)){
              documents[index].mandatory = true; 
            }           
            else{
              documents[index].mandatory = false; 
            }
            }     
        }
      });
  }

  get studentName() {
    return this.onBoardingForm.get('studentName');
  }

  get category() {
    return this.onBoardingForm.get('category');
  }

  get dateOfBirth() {
    return this.onBoardingForm.get('dateOfBirth');
  }

  get fathersName() {
    return this.onBoardingForm.get('fathersName');
  }

  get mothersName() {
    return this.onBoardingForm.get('mothersName');
  }
  
  get lastClassScore() {
    return this.onBoardingForm.get('lastClassScore');
  }

  onSubmit(){
    this.onBoardingService.addNewStudent(this.onBoardingForm.value);
  }

}
