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
import { HomeComponent } from './home/home.component';
//import both HttpModule and HttpClientModule
import { FormsModule} from '@angular/forms';
import { BoldDirective } from './bold.directive'; 

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    CreateComponent,
    EditComponent,
    HomeComponent,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'create',component:CreateComponent},
      {path:'edit/:blogId',component:EditComponent},
      {path:'view/:blogId',component:ViewComponent}
    ])
  ],
  providers: [BlogServiceService],
  bootstrap: [AppComponent],//this is where appcomp is set as shell page,
  exports:[ViewComponent]
})
export class AppModule { }
