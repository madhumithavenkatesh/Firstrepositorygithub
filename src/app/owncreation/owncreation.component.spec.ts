import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwncreationComponent } from './owncreation.component';

describe('OwncreationComponent', () => {
  let component: OwncreationComponent;
  let fixture: ComponentFixture<OwncreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwncreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwncreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
