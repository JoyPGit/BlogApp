import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, OnDestroy {

  public allBlogs: any[] = [];
  public currentBlog;
  constructor(public _route: ActivatedRoute, public service: BlogServiceService) { }

  ngOnInit() {

    console.log("view1");
    //let myBlogId = this._route.snapshot.paramMap.get('blogId');
    //console.log(myBlogId);
    this.service.getSingleBlogInfoUrl('H1w_e-Esz').subscribe(
      data => {
        console.log("view2");
        console.log(data);
        this.currentBlog = data["data"];
      }
    );

    /*this.service.getSingleBlogInfoUrl(this._route.snapshot.paramMap.get('blogId')).subscribe(
      data => {
        console.log(data)
        this.currentBlog = data["data"]
      }
    )*/
  }

  ngOnDestroy() {
  }


}
