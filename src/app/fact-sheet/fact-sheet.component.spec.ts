import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactSheetComponent } from './fact-sheet.component';

describe('FactSheetComponent', () => {
  let component: FactSheetComponent;
  let fixture: ComponentFixture<FactSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
