import { Injectable } from '@angular/core';
//import httpClient
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class BlogServiceService {

  public allBlogs:any;
  public currentBlog;
  public baseUrl='https://blogapp.edwisor.com/api/v1/blogs/';
  public authToken='N2IyMDdhMzU4NTZhYTY0MDE3ODJmMjAxZjAyZjZiMDIzNTg1NGUwZGVkZDI3YTQ0ODk0OTllYzM2ZWJhMzdhMmQ5ZjVjOTk4NTcxOGVhYWFhZDU1ZjY2YTdhNjljMTBjOWExN2RjZDQ5YTdiMWE2MTQxZDlkYzY0NzU5YjJjZjEzZQ==';

  constructor(public _http:HttpClient) {
    console.log("service was called")
   }

  public getAllBlogs():any{
    let myResponse= this._http.get(this.baseUrl+'all?authToken='+this.authToken);
   console.log("get all func called") //console.log(myResponse);
    return myResponse; //if we write this.myresponse it returns an error because myResponse has its scope inside the method
  }

  public getSingleBlogInfoUrl(currentBlogId):any{
    console.log("single serv called");
    let myResponse = this._http.get(this.baseUrl+'view/'+currentBlogId+'?authToken='+this.authToken);
    return myResponse;
  }
   /* public getSingleBlogInfo(currentBlogId):any{
    for(let blog of this.allBlogs){
      if(this.blogId==currentBlogId){
        this.currentBlog = blog;
      }
    }

    console.log(this.currentBlog);
    return this.currentBlog;
  }*/
}
