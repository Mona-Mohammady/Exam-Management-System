import { Component } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component {
  images :string[] = ['assets/images/slide-img-1.webp','assets/images/slide-img-2-copyright.webp','assets/images/slide-img-3.webp'];
  currentIndex=0;
  
   ngOnInit(){
  
    setInterval(()=>{
  
      this.currentIndex=(this.currentIndex +1)%this.images.length;
    },3000);
   }
  
}
