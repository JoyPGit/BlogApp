import { Component, OnInit, Input } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { findSafariExecutable } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  italics: boolean =false;
  bold: boolean=false;
  color:string;
  fontType: any ='normal';

  public allBlogs: any[] = [];
  public currentBlog: any;
  public categories = ["Comedy", "Action", "Drama"];
  public stringCheckNgModel:any ="1234";
  public fontTypes:any[]=['bold','italics','normal'];

  constructor(public _route: ActivatedRoute, public router: Router, public service: BlogServiceService) { }

  ngOnInit() {
    console.log("view2");
    console.log(this._route);
    let myBlogId = this._route.snapshot.paramMap.get('blogId');/*this is how we get the blogId parameter from home 
    component. the parameter is extracted which is to be used for making the api call */

    console.log(myBlogId);

    console.log(this.stringCheckNgModel)

    this.service.getSingleBlogInfoUrl(myBlogId).subscribe(
      data => {
        this.currentBlog = data["data"];
      }
    )
  }

  public saveBlog(): any {
    this.service.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe( //func called with 2 args
      data => {
        console.log(data);
        this.router.navigate(['/edit', this.currentBlog.blogId]);
        this.currentBlog = data["data"];
      } //in path, we provide the blogId which is a parameter mentioned as /:blogId
    )   //in html, we can find the id using the iterator 
  }     //in ts file, we can find using this.var where var is the ouput of subscribe

  
  public setTypeBold():any{
    this.bold = !this.bold;
  }

  public setTypeItalics():any{
    this.italics = !this.italics;
  }

  public ngCheck = ():any=>{
    console.log(this.stringCheckNgModel);
    let y =this.stringCheckNgModel;
  }
  
}

