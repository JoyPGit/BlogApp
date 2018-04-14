import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(public _route: ActivatedRoute, public service: BlogServiceService) { }

  ngOnInit() {
    //console.log(this._route.snapshot);
    this.service.getAllBlogs().subscribe(
      data => {
        console.log(data);
        this.allBlogs = data['data'];
      }
    )
  }
}
