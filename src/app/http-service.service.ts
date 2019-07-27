import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  url;
 jobs = new Subject<any>();
 allJobs;
  
  constructor(private http: HttpClient) { }
  
  getJob(jobType){
    this.url = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=" + jobType;
      this.http.get<any>(this.url).subscribe(data=>{
        this.allJobs = data;
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

}
