import { Component, OnInit,HostListener } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {DataService} from '../../services/data.service'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public videoWidth = 600;
  public videoHeight = 300;
  public videoKey:any;
  public isSmall = false;
  public mediaType:any;
  public mediaId:any;
  public getInt = Math.floor
  public hasAdded = false
  public twContent:any
  public fbContent:any

  public reviews:any

  public casts:any
  public castInfo:any
  public castSocial:any
  public castImg:any

  public similar:any
  public recommendations:any

  public basic:any
  constructor( private data:DataService, private router:ActivatedRoute) {
    // use router.queryParams can get para like ?a=1
    // router.paramMap to get para in ulr path (defined at router js)
    router.paramMap.subscribe(params => {
      this.mediaType = params.get('media_type')
      this.mediaId = params.get('id')
    })
  }


  ngOnInit(): void {
    this.onResize()
    
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.data.get(`/detail/${this.mediaType}/${this.mediaId}`).subscribe((resp:any)=>{
        this.basic = resp
        this.basic.genres = this.basic.genres.map((item:any)=>item['name'])
        this.basic.spoken_languages = this.basic.spoken_languages.map((item:any)=>item['name'])
        this.checkStatus()
        this.contiueWatch()
        this.twContent = `Watch ${this.basic['title']} ${'https://www.youtube.com/watch?v='+this.videoKey}     %23 USC %23 CSCI571 #FightOn` 
    })

    this.data.get(`/3/${this.mediaType}/${this.mediaId}/videos`).subscribe((resp:any)=>{
      if(resp && resp.length >0 ){
        this.videoKey = resp[0]['key']
      }else{
        this.videoKey = 'tzkWB85ULJY'
      }
      // it is async so double write this to get all valid data
      this.fbContent = 'https://www.youtube.com/watch?v='+this.videoKey
      this.twContent = `Watch ${this.basic['title']} ${'https://www.youtube.com/watch?v='+this.videoKey}     %23 USC %23 CSCI571 #FightOn`
    })

    this.data.get(`/3/${this.mediaType}/${this.mediaId}/reviews`).subscribe((resp:any)=>{
      this.reviews = resp.slice(0,10)
    })

    this.data.get(`/3/${this.mediaType}/${this.mediaId}/credits`).subscribe((resp:any)=>{
        this.casts = resp
        // console.log(resp)
    })

    this.data.get(`/3/${this.mediaType}/${this.mediaId}/credits`).subscribe((resp:any)=>{
      this.casts = resp
      // console.log(resp)
  })

  this.data.get(`/collect/${this.mediaType}/${this.mediaId}/similar`).subscribe((resp:any)=>{
    this.similar = resp
  })

  this.data.get(`/collect/${this.mediaType}/${this.mediaId}/recommendations`).subscribe((resp:any)=>{
    this.recommendations = resp
    // console.log(resp)
  })



}

  contiueWatch(){
    let oldData:Array<any> = this.data.get_local('continue')
    let idxs = oldData.map((item:any)=>item['id'])
    // if exist del it finally add it to the tail of array 
    for (let index = 0; index < oldData.length; index++) {
      if(oldData[index]["id"] ==  this.basic["id"]){
        oldData.splice(index,1)
      }      
    }
    // if length > 24 remove top element
    if (oldData.length==24){
      oldData.shift()
    }
    oldData.push({
        id:this.basic["id"],
        title:this.basic['title'],
        poster_path:this.basic['poster_path'],
        media_type:this.mediaType
    })
      this.data.set_local('continue',oldData)
  }
 



  @HostListener('window:resize', ['$event'])
  onResize() {
    let width = window.innerWidth;
    // let w= width*2/3
    // let h= w*2/3
    // this.videoWidth = w>600?600:w
    // this.videoHeight = h>300?300:h

    // another way
    this.isSmall= width<=920?true:false
    this.videoWidth = this.isSmall?380:600
    this.videoHeight = this.isSmall?240:350
  }
  

  checkStatus(){
    let oldData = this.data.get_local('mylist')
    let idxs = oldData.map((item:any)=>item['id'])

    if (idxs.indexOf(this.basic['id'])!=-1){
      this.hasAdded = true
      console.log(this.hasAdded)
      return true
    }else{
      this.hasAdded = false
      return false
    }  
  }

  alertPan(type:String,alertContent:String){

    console.log("close")

    let alertHtml = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
    ${alertContent}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" id="alertBtn">
      <span aria-hidden="true">&times;</span>
    </button>
    </div>`
    let div = document.getElementById("alertPan")
    if (div){
      div.innerHTML = alertHtml
    }
    window.setTimeout(function(){
        document.getElementById('alertBtn')?.click()
        console.log("closed")
    },5000);
  }

  addList(){
    let oldData = this.data.get_local('mylist')
    if(this.hasAdded){
      for(let idx in oldData){
        if(oldData[idx]['id'] == this.basic["id"]){
          oldData.splice(idx,1)
          this.data.set_local('mylist',oldData)
          this.alertPan('danger',"Removed from watchlist.")
          this.hasAdded = false
        }
      }
    }else{
      if(oldData.length==24){
        oldData.shift()
      }

      oldData.push({
        id:this.basic["id"],
        title:this.basic['title'],
        poster_path:this.basic['poster_path'],
        media_type:this.mediaType
      })
      this.data.set_local('mylist',oldData)
      this.hasAdded = true
      this.alertPan('success',"Added to watchlist.")
    }

  }

  castDetail(castID:any,profile_path:any){

    this.castImg = profile_path
    this.data.get(`/person/${castID}`).subscribe((resp:any)=>{
      this.castInfo = resp
      // console.log(resp)
    })
    this.data.get(`/person/${castID}/external_ids`).subscribe((resp:any)=>{
      this.castSocial = resp
      // console.log(resp)
    })
  }
}
