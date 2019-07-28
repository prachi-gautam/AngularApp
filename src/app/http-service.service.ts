import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
 url;
 fetchAllJobs = true;
 flag = true;
 jobs = new Subject<any>();
 displayInitialJobs = new Subject<any>();
 allJobs;
 initialJobs;

  constructor(private http: HttpClient) { }
  
  getJob(searchText){
    this.url = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=" + searchText;
      this.http.get<any>(this.url).subscribe(data=>{
        this.allJobs = data;
        if(this.fetchAllJobs){
          this.initialJobs= data;
          this.fetchAllJobs = false;
        }
        this.jobs.next(data);
    },error =>{
      console.log(error);
    });
  }

  getJobDescription(id){
    var i;
    const len = this.allJobs.length;
    for(i=0;i<=len;i++){
      if(this.allJobs[i].id == id){
        return this.allJobs[i].description;
      }
    }
  }

  displayAllJobs(){
    this.flag = !this.flag;
    this.displayInitialJobs.next(this.initialJobs);
  }

}
