import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  isEditForm: boolean = false;
  isViewForm: boolean = false;

  constructor(private formBuilder: FormBuilder, public onBoardingService: OnBoardingService, private router: Router, private route: ActivatedRoute) {}

  private addCheckboxes() {
    this.documents.map((o, i) => {
      const control = new FormControl(false); // if first item set to true, else false
      (this.onBoardingForm.controls.documents as FormArray).push(control);
    });
  }

  ngOnInit() {
    this.onBoardingForm = this.formBuilder.group({
      studentId: [0],
      studentName: ['', Validators.required],
      category: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      fathersName: ['', Validators.required],
      mothersName: ['', Validators.required],
      lastClassScore: ['', Validators.required],
      documents: new FormArray([])},
       { validator: DocumentValidator });
       
       this.addCheckboxes();

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

      let editAndViewFormData = this.onBoardingService.getEditAndViewStudentData();
      if(editAndViewFormData != null){
          this.onBoardingForm.patchValue({
            studentId: editAndViewFormData.studentData.studentId,
            studentName: editAndViewFormData.studentData.studentName,
            category: editAndViewFormData.studentData.category ,
            dateOfBirth: new Date(editAndViewFormData.studentData.dateOfBirth),
             fathersName: editAndViewFormData.studentData.fathersName,
             mothersName: editAndViewFormData.studentData.mothersName,       
             lastClassScore: editAndViewFormData.studentData.lastClassScore
           });    
            
        this.category.markAsDirty();
        this.onBoardingForm.setControl('documents', this.setDocumentsInFormArray(editAndViewFormData.studentData.documents) );
        if(editAndViewFormData.isFormDisabled){
          this.isViewForm = true;
          this.disableOnBoardingForm();
        }
        else{
          this.isEditForm = true;          
        }

      }

  }

  disableOnBoardingForm(){
    this.onBoardingForm.get('studentName').disable();
    this.onBoardingForm.get('category').disable();
    this.onBoardingForm.get('dateOfBirth').disable();
    this.onBoardingForm.get('fathersName').disable();
    this.onBoardingForm.get('mothersName').disable();
    this.onBoardingForm.get('lastClassScore').disable();
    this.onBoardingForm.get('documents').disable();
  }

  setDocumentsInFormArray(documents){
    let formArray = new FormArray([]);
    formArray.controls = [];

    documents.map((key, value) => {
        let formControl = new FormControl(key);
        (formArray as FormArray).push(formControl)
    });
    return formArray;
  }

  backToListView(){
    this.router.navigate(['/onboard/students']);
  }

  get studentId(){
    return this.onBoardingForm.get('studentId');
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
    if (this.onBoardingForm.invalid) {
      return;
    }
    this.onBoardingService.addNewStudent(this.onBoardingForm.value);
    this.router.navigate(['/onboard/students']);
  }

}
