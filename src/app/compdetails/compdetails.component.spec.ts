import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompdetailsComponent } from './compdetails.component';

describe('CompdetailsComponent', () => {
  let component: CompdetailsComponent;
  let fixture: ComponentFixture<CompdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompdetailsComponent]
    });
    fixture = TestBed.createComponent(CompdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
