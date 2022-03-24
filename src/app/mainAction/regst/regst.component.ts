import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regst',
  templateUrl: './regst.component.html',
  styleUrls: ['./regst.component.css']
})
export class RegstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formValidation = new FormGroup({
    name1: new FormControl("", Validators.required),
    name2: new FormControl("", Validators.minLength(3)),
    name3: new FormControl("", Validators.pattern('/^[A-Za-z]+$/')),
    age: new FormControl(null,[Validators.min(20),Validators.max(40)])
  });

  get isNameValid1(){
    return !this.formValidation.controls["name1"].valid;
  }

  get isNameValid2(){
    return this.formValidation.controls["name2"].valid;
  }

  get isNameValid3(){
    return !this.formValidation.controls["name3"].valid;
  }

  get isAgeValid(){
    return this.formValidation.controls["age"].valid;
  }


  name:any = "";
  age:any = "";
  count = 1;
  ppl:{name: any, age:any}[]=[];

  @Output() myEvent = new EventEmitter();

  AddStudent(){
    let onePerson = {count:this.count, name:this.name, age: this.age};
      this.ppl.push(onePerson);
      this.count++;
    console.log(this.ppl);
    this.bubbleUp();
  }

  bubbleUp(){
    this.myEvent.emit(this.ppl);
  }

}
