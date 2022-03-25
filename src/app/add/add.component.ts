import { Component, OnInit } from '@angular/core';
import { PplService } from '../Services/ppl.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private myService:PplService) { }

  ngOnInit(): void {
  }

  heros:any;
  myServiceAdd:any;

  addHero(name="", email="", adress="", image="", powers=""){
    let newHero = {name, email, adress, image, powers};
    this.myServiceAdd = this.myService.AddNewHero(newHero).subscribe();
  }

  ngOnDestroy(): void {
    this.myServiceAdd.unsubscribe();
  }
}
