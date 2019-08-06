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
  allJobsSubscription;
  constructor(private jobService: HttpServiceService, private route: Router) { }

  ngOnInit() {
    this.subscription = this.jobService.jobs.subscribe(data=>{
      this.jobs = data;
    })

    this.allJobsSubscription = this.jobService.displayInitialJobs.subscribe(data => {
      this.jobs = this.jobService.initialJobs;
    })
  }

  //Method to navigate to job description by id
  getDescription(job){
    this.route.navigate(['/jobdescription',job.id]);
  }


//To unsubscribe the subscribed data and observables.
  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.allJobsSubscription.unsubscribe();
  }

}
