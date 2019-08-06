import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  jobId;
  jobDescription;
  constructor(private router: Router,private route: ActivatedRoute, private httpService: HttpServiceService) { }

  //calling service class method for getting job description by id
  ngOnInit() {
    this.jobId = this.route.snapshot.paramMap.get('id');
    this.httpService.getJobDescription(this.jobId).subscribe(data =>{ 
    this.jobDescription=data['description']
    }
    ,error =>{
      
      this.jobDescription="No Data Found For this Job .. Please try again later !!";
    });
  }

  //Method to navigate to job list
  goToJobTitle(){
    this.router.navigate(['/jobList']);
  }

}
