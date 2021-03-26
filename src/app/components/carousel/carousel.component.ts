import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private data:DataService) { };
  
  currentlyPlaying:any = [];
  ngOnInit(): void {
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

}
