import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { DocumentAndCategoryValidator } from '../shared/validators/documentAndCategory.validator';
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
  urlPath: string;
  urlId: number;

  constructor(private formBuilder: FormBuilder, public onBoardingService: OnBoardingService, private router: Router, private route: ActivatedRoute) { }

  private addDocumentsCheckboxes() {
    this.documents.map((o, i) => {
      const control = new FormControl(false); // if first item set to true, else false
      (this.onBoardingForm.controls.documents as FormArray).push(control);
    });
  }

  ngOnInit() {
    this.route.url.subscribe((url: UrlSegment[]) => this.urlPath = url[0].path); //set the path from url
    this.route.params.subscribe(params => { this.urlId = params.id; }); //set the id from url

    this.onBoardingForm = this.formBuilder.group({
      studentId: [0],
      studentName: ['', Validators.required],
      category: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      fathersName: ['', Validators.required],
      mothersName: ['', Validators.required],
      lastClassScore: ['', Validators.required],
      documents: new FormArray([])
    },
      { validator: DocumentAndCategoryValidator });

    this.addDocumentsCheckboxes(); // add checkboxes for the documents

    // show the asterisk on the documents and set the manadatory field of each document, when the category is selected
    this.onBoardingForm.get('category').valueChanges
      .subscribe(checkedValue => {
        const category = this.onBoardingForm.get('category');
        if (category.value === CATEGORIES.International) {
          for (let index = 0; index < INTERNATIONAL_MANADATORY_DOCUMENTS.length; index++) {
            documents[INTERNATIONAL_MANADATORY_DOCUMENTS[index]].mandatory = true;
          }
        }
        if (category.value === CATEGORIES.Domestic) {
          for (let index = 0; index < 6; index++) {
            if (DOMESTIC_MANADATORY_DOCUMENTS.includes(index)) {
              documents[index].mandatory = true;
            }
            else {
              documents[index].mandatory = false;
            }
          }
        }
      });

    // if the url path is for view or edit, set the form values 
    if (this.urlPath === "view" || this.urlPath === "edit") {
      let editAndViewFormData = this.onBoardingService.getStudentById(this.urlId);
      if (editAndViewFormData != null) {
        this.onBoardingForm.patchValue({
          studentId: editAndViewFormData.studentId,
          studentName: editAndViewFormData.studentName,
          category: editAndViewFormData.category,
          dateOfBirth: new Date(editAndViewFormData.dateOfBirth),
          fathersName: editAndViewFormData.fathersName,
          mothersName: editAndViewFormData.mothersName,
          lastClassScore: editAndViewFormData.lastClassScore
        });
        this.category.markAsDirty();
        // map the documents value in form from the student data
        this.onBoardingForm.setControl('documents', this.setDocumentsInFormArray(editAndViewFormData.documents));
        if (this.urlPath === "view") {
          this.isViewForm = true;
          this.disableOnBoardingForm(); // if the form is only to be viewed, disable the form fields
        }
        else {
          this.isEditForm = true;
        }
      }
    }
  }

  setDocumentsInFormArray(documents) {
    let formArray = new FormArray([]);
    formArray.controls = [];
    documents.map((key, value) => { formArray.push(new FormControl(key)) });
    return formArray;
  }

  disableOnBoardingForm() {
    this.onBoardingForm.get('studentName').disable();
    this.onBoardingForm.get('category').disable();
    this.onBoardingForm.get('dateOfBirth').disable();
    this.onBoardingForm.get('fathersName').disable();
    this.onBoardingForm.get('mothersName').disable();
    this.onBoardingForm.get('lastClassScore').disable();
    this.onBoardingForm.get('documents').disable();
  }

  get studentId() {
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

  onSubmit() {
    if (this.onBoardingForm.invalid) {
      return;
    }
    if (this.isEditForm) {
      this.onBoardingService.updateStudent(this.onBoardingForm.value);
    }
    else {
      this.onBoardingService.addStudent(this.onBoardingForm.value);
    }
    this.router.navigate(['/onboard/students']);
  }

}
