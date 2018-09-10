import { Injectable } from '@angular/core';
//import httpClient
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class BlogServiceService {

  public allBlogs: any;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs/';
  public authToken = 'OWJkY2I1MWMzMGFhODZlZjk5ZDk0YTU1MGZjODFkN2RlYjc5ODU3NmFiODVkZTI5MjEyMzVlNzgxNmIxOGUzMTE3OGQwNGU0NTQ1NjlhZTg4MjU1M2YyNjE1YTAzMDc4ZGY1YTZkZjIyNjA0NGNlNGM2MTdjOTg0MWY4NDE4OGM2ZA==';
  public authToken2 = 'MzhlNjU2NWRlNTNhYjUxYzJhODkwODVkMGFjNGI5YmEwNjAwNjA0YjgyYzU4NGMwYTM5YWIwMWFmNWI0YTA4NWFiZWI3MTM5NDc0MzM2OGJkNzEzMDFiZjBlNmJiMDEyOTlhYjRlYTZjZjUxZjI5M2QyYjYwYzliYTRjM2E4N2NhOA==';

  constructor(public _http: HttpClient) {
    console.log("service was called")
  }

  public getAllBlogs(): any {
    let myResponse = this._http.get(this.baseUrl + 'all?authToken=' + this.authToken2);
    console.log("get all func called") //console.log(myResponse);
    return myResponse; //if we write this.myresponse it returns an error because myResponse has its scope inside the method
  }

  public getSingleBlogInfoUrl(currentBlogId): any {
    console.log("single serv called", currentBlogId);
    let myResponse = this._http.get(this.baseUrl + 'view/' + currentBlogId + '?authToken=' + this.authToken2);
    return myResponse; 
  }
  /* currentblogid is the parameter which we pass as it has been mentioned in the api's (https://blogapp.edwisor.com/apiDoc/) 
  edit blog by blogid api https://blogapp.edwisor.com/api/v1/blogs/:blogId/edit. here blogid is the parameter to be provided
  so here we just make http call using our own parameter. the method of a component which calls this method will have to 
  provide the actual blogid */


  /*public getSingleBlogInfo(currentBlogId): any {
    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }

    console.log(this.currentBlog);
    return this.currentBlog;
  }*/
  public createBlog(blogData):any{ //the parameter blogData will be availed from comp making func call
    let myResponse = this._http.post(this.baseUrl+'/create'+'?authToken='+this.authToken2, blogData);
    return myResponse;
  }

  public editBlog(blogId, blogData):any{
    let myResponse = this._http.post(this.baseUrl+'/'+blogId+'/edit'+'?authToken='+this.authToken2, blogData);
    return myResponse;
  }

  public deleteBlog(blogId){
    let data={};
    let myResponse = this._http.post(this.baseUrl+'/'+blogId+'/delete'+'?authToken='+this.authToken2, data)
    return myResponse;
  }
}
