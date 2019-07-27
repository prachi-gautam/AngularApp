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

  ngOnInit() {
    this.jobId = this.route.snapshot.paramMap.get('id');
    this.jobDescription = this.httpService.getJobDescription(this.jobId);
    document.getElementById('myDiv').innerHTML = this.jobDescription;
  }

  goToJobTitle(){
    this.router.navigate(['/jobList']);
  }

}
