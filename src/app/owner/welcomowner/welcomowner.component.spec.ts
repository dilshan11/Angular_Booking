import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomownerComponent } from './welcomowner.component';

describe('WelcomownerComponent', () => {
  let component: WelcomownerComponent;
  let fixture: ComponentFixture<WelcomownerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomownerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
