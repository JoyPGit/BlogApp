import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogServiceService } from './blog-service.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public allBlogs: any[] = [];
  public currentBlog;
  constructor(public _route: ActivatedRoute, public service: BlogServiceService, public router: Router) { }

  ngOnInit() {
    //console.log(this._route.snapshot);

  }

}
