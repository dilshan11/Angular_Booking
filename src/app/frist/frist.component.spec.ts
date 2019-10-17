import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FristComponent } from './frist.component';

describe('FristComponent', () => {
  let component: FristComponent;
  let fixture: ComponentFixture<FristComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FristComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
