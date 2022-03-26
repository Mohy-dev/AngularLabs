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
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern('/^[A-Za-z]+$/')]),
    age: new FormControl(null,[Validators.required, Validators.min(20),Validators.max(40)])
  });

  get isNameValid(){
    return this.formValidation.controls["name"];
  }

  get isAgeValid(){
    return this.formValidation.controls["age"];
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
