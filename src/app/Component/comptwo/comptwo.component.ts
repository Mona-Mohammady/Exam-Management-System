import { Component } from '@angular/core';

@Component({
  selector: 'app-comptwo',
  templateUrl: './comptwo.component.html',
  styleUrls: ['./comptwo.component.css']
})
export class ComptwoComponent {


  // items = [
  //   { name: 'Productive', picture: 'assets/images/about-1.jpg' },
  //   { name: 'Creative', picture: 'assets/images/about-2.jpg' },
  //   { name: 'Succesfull', picture: 'assets/images/about-3.jpg' }
  // ];
  // currentPicture = 'assets/images/about-3.jpg';

  // changePicture(item: any) {
  //   this.currentPicture = item.picture;
  // }
  i: number;
  imgSrc;
  constructor() {
    this.i = 0;
    this.imgSrc = 'assets/images/about-1.jpg';
  }
  
  imgsList: string[] = [
    'assets/images/about-1.jpg',
    'assets/images/about-2.jpg',
    'assets/images/about-3.jpg'
  ];
  show(): void {
   
    this.i++;
    if (this.imgsList.length == this.i) {
      this.i = 0;
    }
    this.imgSrc = this.imgsList[this.i];
  }
}
