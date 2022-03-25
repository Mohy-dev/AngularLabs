import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PplService {

  constructor(private MyClient:HttpClient) { }

  BaseURL = "http://localhost:3000/SuperHeros";

  getAllHeros(){
    return this.MyClient.get(this.BaseURL, {observe:"response"});
  }

  getHeroByID(id:number){
    return this.MyClient.get(`${this.BaseURL}/${id}`);
  }

  AddNewHero(hero:any){
    return this.MyClient.post(this.BaseURL, hero);
  }

  deleteHero(id:any){
    return this.MyClient.delete(`${this.BaseURL}/${id}`);
  }
}
