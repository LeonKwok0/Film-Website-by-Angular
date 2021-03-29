import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public videoWidth = 0;
  public videoHeight = 0;
  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }


  @HostListener('window:resize', ['$event'])
  onResize() {
    let width = window.innerWidth;
    let w= width*2/3
    let h= w*2/3
    this.videoWidth = w>600?600:w
    this.videoHeight = h>300?300:h
  }

}
