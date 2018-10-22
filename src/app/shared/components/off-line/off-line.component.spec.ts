import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffLineComponent } from './off-line.component';

describe('OffLineComponent', () => {
  let component: OffLineComponent;
  let fixture: ComponentFixture<OffLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
