import { Component, OnInit,HostListener } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  public isSmall:any

  constructor(private data:DataService) { };
  
  currentlyPlaying:any = [];
  ngOnInit(): void {
    this.onResize() 
    this.getData()
  }

  getData(){
    let url = '/current_play'
    this.data.get(url).subscribe(
      (resp:any)=>{  
        this.currentlyPlaying = resp;
      }
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    let width = window.innerWidth;
    this.isSmall= width<=920?true:false
  }

}
