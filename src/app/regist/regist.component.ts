import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent{

  name = "";
  age:any = "";
  count = 1;
  ppl:{name: any, age:any}[]=[];

  @Output() myEvent = new EventEmitter();

  AddStudent(){
    let isOkName = /^[a-zA-Z ]+$/.test(this.name);
    let onePerson = {count:this.count, name:this.name, age: this.age};
    if(this.age > 18 && isOkName){
      this.ppl.push(onePerson);
      this.count++;
    }
    console.log(this.ppl);
    this.bubbleUp();
  }

  bubbleUp(){
    this.myEvent.emit(this.ppl);
  }
}
