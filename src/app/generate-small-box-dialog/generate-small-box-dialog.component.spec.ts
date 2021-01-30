import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateSmallBoxDialogComponent } from './generate-small-box-dialog.component';

describe('GenerateSmallBoxDialogComponent', () => {
  let component: GenerateSmallBoxDialogComponent;
  let fixture: ComponentFixture<GenerateSmallBoxDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateSmallBoxDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateSmallBoxDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
