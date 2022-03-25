import { Component, OnInit } from '@angular/core';
import { PplService } from '../Services/ppl.service';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HerosComponent implements OnInit {

  constructor(private hero:PplService) { }

  heros:any;

  id:any;

  ngOnInit(): void {
    this.hero.getAllHeros().subscribe(
      (data)=>{
        this.heros = data.body;
        console.log(this.heros);
      },
      (error)=>{console.log(error)}
    );
  }

  deleteHero(id=""){
    return this.hero.deleteHero(id).subscribe();
  }

}
