import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { categories } from '../shared/categories';


@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.css']
})
export class OnBoardingComponent implements OnInit {
  categories = categories;
  onBoardingForm = new FormGroup({
    studentName: new FormControl(''),
    category: new FormControl(''),
    dateOfBirth: new FormControl(''),
    fathersName: new FormControl(''),
    mothersname: new FormControl(''),
    lastClassScore: new FormControl('')
  });
  constructor() { }

  ngOnInit() {
  }

}
