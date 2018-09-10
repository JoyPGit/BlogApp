import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'; //import this module and then add in providers


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers:[Location]
})
export class ViewComponent implements OnInit, OnDestroy {
  public allBlogs: any[] = [];
  public currentBlog: any ;

  @Input() viewVar:string;
  
  constructor(public _route: ActivatedRoute, public router:Router, public service: BlogServiceService, public location:Location) { }

  ngOnInit() {
    console.log("view1");
    console.log(this.viewVar);
    console.log(this._route);
    let myBlogId = this._route.snapshot.paramMap.get('blogId'); //imp, learn about snapshot.paramMap
    console.log(myBlogId);//it holds only blogid's value
    

    this.service.getSingleBlogInfoUrl(myBlogId).subscribe(
      data=>{
        this.currentBlog = data["data"];
        console.log(this.currentBlog);
      }
    )
  }
  public o = (viewVar)=>{
  console.log(this.viewVar);
  console.log("hola");
    
  }

  ngOnChanges(changes:SimpleChanges ){
    console.log(this.viewVar);
  }
  public deleteThisBlog():any{
    this.service.deleteBlog(this.currentBlog.blogId).subscribe(
      data=>{
        console.log(data);
        setTimeout(()=>{
          this.router.navigate(['/home']);
        },1000)
      }
    )
  }

  public goBack():any{  
    this.location.back(); //back method is in-built, attach this method to some html element
  }

  ngOnDestroy() {
  }

}
