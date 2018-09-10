import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogServiceService } from '../blog-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allBlogs: any[] = [];
  public currentBlog;
  public y:string="hola mundo";
  constructor(public _route: ActivatedRoute, public service: BlogServiceService, public router: Router) { 
  }

  ngOnInit() {
    this.service.getAllBlogs().subscribe(
      data => {
        console.log(data);
        this.allBlogs = data['data'];
        //using map
        this.allBlogs.map((b, index) => {
          b.id = index + 1;  //here we are modifying the array and adding a new property in each object element of the array
        });
        //using forEach loop
        this.allBlogs.forEach((el, index) => {  //index is by default holding the array's index; el is what makes the array iterable;   
          el.newAddedIndex = index;             //if newAddedIndex property is present it is used else a new property is      
        console.log(el.newAddedIndex);          //created in the object element
          console.log("new property's value");
          //el.blogId = index +1;                //blogid poperty of data is being edited 
        });
        //using for of to iterate
        for(let x of this.allBlogs){
          x.forIndex=this.allBlogs.indexOf(x);  //forIndex is the new property added
        }
        console.log(data);  
      })
  }
}
