import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';


const routes: Routes = [
  { path: "jobList", component: JobsListComponent,},
  { path: "jobdescription/:id", component: JobDetailComponent},
  { path: '',
    redirectTo: '/jobList',
    pathMatch: 'full'
  },
  { path: '**', component: JobsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
