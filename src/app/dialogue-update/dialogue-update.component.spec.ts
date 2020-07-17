import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueUpdateComponent } from './dialogue-update.component';

describe('DialogueUpdateComponent', () => {
  let component: DialogueUpdateComponent;
  let fixture: ComponentFixture<DialogueUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogueUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
