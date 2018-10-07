import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogCreateFormComponent } from './log-create-form.component';

describe('LogCreateFormComponent', () => {
  let component: LogCreateFormComponent;
  let fixture: ComponentFixture<LogCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
