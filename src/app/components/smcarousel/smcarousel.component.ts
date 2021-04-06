import { Component, OnInit, Input, HostListener } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-smcarousel',
  templateUrl: './smcarousel.component.html',
  styleUrls: ['./smcarousel.component.css']
})



export class SmcarouselComponent implements OnInit {
  @Input() idx: string = "";
  @Input() url: string = ""; // request url
  public bigList: Array<Array<any>> = []
  public smList: any = []
  public width = 0
  public isSmall =false
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.onResize()

    if(this.url=="ContinueWatching"){
      this.smList = this.data.get_local('continue').reverse()
      let tmp: Array<any> = this.smList
      for (let i = 0; i < 24; i += 6) {
        if (this.smList[i]) {
          this.bigList.push(tmp.slice(i, i + 6))
        }
      }
      return
      }

    this.data.get(this.url).subscribe(
      (resp: any) => {
        console.log(resp)
        this.smList = resp
        let tmp: Array<any> = resp
        for (let i = 0; i < 24; i += 6) {
          if (resp[i]) {
            this.bigList.push(tmp.slice(i, i + 6))
          }
        }
        // console.log(this.bigList)
      }
    )
  }
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = window.innerWidth;
    this.isSmall= this.width<=920?true:false
    console.log(this.width)
  }
}
