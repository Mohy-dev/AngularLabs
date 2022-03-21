import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

  imageSrc= "assets/Images/1.jpg";
  slideStarted:any = 1;
  images = ["assets/Images/1.jpg", "assets/Images/2.jpg", "assets/Images/3.jpg"];
  i:number = 0;

  nextShow() {
      this.i++;
      if (this.i >= this.images.length) this.i = 0;
      this.imageSrc = this.images[this.i];
  }
  startShow() {
    if (!this.slideStarted) this.slideStarted = setInterval(() => this.nextShow(), 500);
  }
  prevShow() {
      this.i--;
      if (this.i < 0) this.i = this.images.length - 1;
      this.imageSrc = this.images[this.i];
  }
  stopShow() {
      clearInterval(this.slideStarted);
      this.slideStarted = null;
  }

}
