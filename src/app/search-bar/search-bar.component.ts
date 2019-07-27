import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchText="";
  constructor(private httpService:HttpServiceService) { }

  ngOnInit() {
    this.httpService.getJob(this.searchText);
  }

  searchJobs(){
    this.httpService.getJob(this.searchText);
  }

}
