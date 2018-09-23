import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RackOverviewComponent } from './rack-overview.component';

describe('RackOverviewComponent', () => {
  let component: RackOverviewComponent;
  let fixture: ComponentFixture<RackOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RackOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RackOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
