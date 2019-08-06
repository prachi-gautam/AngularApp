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
  
  //Method for getting JOb List on basis of search Text
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
 //Method for getting job description by id
  getJobDescription(id){
     return this.http.get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/"+id+".json");
     
    
 
  }

  //Method for displaying All jobs when search box is cleared
  displayAllJobs(){
    this.flag = !this.flag;
    this.displayInitialJobs.next(this.initialJobs);
  }

}
