import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationOverviewComponent } from './station-overview.component';

describe('StationOverviewComponent', () => {
  let component: StationOverviewComponent;
  let fixture: ComponentFixture<StationOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
