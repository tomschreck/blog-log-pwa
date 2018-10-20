import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCardListComponent } from './blog-card-list.component';

describe('BlogCardListComponent', () => {
  let component: BlogCardListComponent;
  let fixture: ComponentFixture<BlogCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
