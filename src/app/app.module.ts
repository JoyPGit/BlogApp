import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule,Router } from '@angular/router';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { BlogServiceService } from './blog-service.service';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BlogcompdetailComponent } from './blogcompdetail/blogcompdetail.component';
//import both HttpModule and HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    CreateComponent,
    EditComponent,
    BlogcompdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'create',component:CreateComponent},
      {path:'edit/:blogId',component:EditComponent},
      {path:'view/:blogId',component:BlogcompdetailComponent}
    ])
  ],
  providers: [BlogServiceService],
  bootstrap: [AppComponent]//this is where appcomp is set as shell page
})
export class AppModule { }
