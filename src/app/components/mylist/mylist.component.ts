import { Component, OnInit,HostListener } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {
  public mylist:Array<any> = []
  constructor(private data:DataService) { }
  public isSmall:any
  ngOnInit(): void {
    this.onResize()
    let raw_list:Array<any> = this.data.get_local('mylist').reverse()
    for (let i = 0; i < raw_list.length+6; i += 6) {
      if (raw_list[i]) {
        this.mylist.push(raw_list.slice(i, i + 6))
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    let width = window.innerWidth;
    this.isSmall= width<=920?true:false
    console.log(width)
  }

}
