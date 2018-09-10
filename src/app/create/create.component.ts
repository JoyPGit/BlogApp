import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public blogserv:BlogServiceService) { }

  public blogTitle:string = "this is default";//this shows bidirectional binding
  public blogBodyHtml:string;
  public blogDescription:string;
  public blogCategory:string;
  public categories =["Comedy","Action","Drama"];

  ngOnInit() {
    console.log("create called")
  }
  
  public createABlog():any{
    let blogData={
      title:this.blogTitle,
      description:this.blogDescription,
      body:this.blogBodyHtml,
      category:this.blogCategory
    }    
    console.log(blogData);

    this.blogserv.createBlog(blogData).subscribe(
      data=>{
        console.log(data);
        console.log("blog created successfully");
      }
    )
  }

}
