import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {
  jobs;
  subscription;
  constructor(private jobService: HttpServiceService, private route: Router) { }

  ngOnInit() {
    this.subscription = this.jobService.jobs.subscribe(data=>{
      this.jobs = data;
    })
  }

  getDescription(job){
    this.route.navigate(['/jobdescription',job.id]);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}