import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBoxDialogComponent } from './create-box-dialog.component';

describe('CreateBoxDialogComponent', () => {
  let component: CreateBoxDialogComponent;
  let fixture: ComponentFixture<CreateBoxDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBoxDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBoxDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
