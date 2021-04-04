import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {
  public mylist:Array<any> = []
  constructor(private data:DataService) { }

  ngOnInit(): void {
    let raw_list:Array<any> = this.data.get_local('mylist').reverse()
    for (let i = 0; i < raw_list.length+6; i += 6) {
      if (raw_list[i]) {
        this.mylist.push(raw_list.slice(i, i + 6))
      }
    }
  }

}
