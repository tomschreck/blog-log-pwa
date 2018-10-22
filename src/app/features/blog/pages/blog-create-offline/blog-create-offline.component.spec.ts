import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCreateOfflineComponent } from './blog-create-offline.component';

describe('BlogCreateOfflineComponent', () => {
  let component: BlogCreateOfflineComponent;
  let fixture: ComponentFixture<BlogCreateOfflineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCreateOfflineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCreateOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
