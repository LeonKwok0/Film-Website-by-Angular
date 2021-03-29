import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {retry} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  get_local(key:string){
    let res  = localStorage.getItem(key)
    if (res){
      return JSON.parse(res)
    }else{
      return -1
    }   
  }
  
  set_local(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value))

  }

  get(url:string){
    url = 'http://localhost:3001' +url
    return this.http.get(url)
    .pipe(
      retry(3),
    )
  }

  getSmallCaro(content:any,type:any,when:any){

    return this.http.get(`/api/smallCaro/${content}/${type}${when==null? '':'/'+when}`)
  }

}
