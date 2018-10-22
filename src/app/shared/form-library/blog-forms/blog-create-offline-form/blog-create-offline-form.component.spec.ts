import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCreateOfflineFormComponent } from './blog-create-offline-form.component';

describe('BlogCreateOfflineFormComponent', () => {
  let component: BlogCreateOfflineFormComponent;
  let fixture: ComponentFixture<BlogCreateOfflineFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCreateOfflineFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCreateOfflineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
