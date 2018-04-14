import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogcompdetailComponent } from './blogcompdetail.component';

describe('BlogcompdetailComponent', () => {
  let component: BlogcompdetailComponent;
  let fixture: ComponentFixture<BlogcompdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogcompdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogcompdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
