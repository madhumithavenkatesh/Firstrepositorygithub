import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdcomponentdialogComponent } from './idcomponentdialog.component';

describe('IdcomponentdialogComponent', () => {
  let component: IdcomponentdialogComponent;
  let fixture: ComponentFixture<IdcomponentdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdcomponentdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdcomponentdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
