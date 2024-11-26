import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlottrPlotlineComponent } from './plottr-plotline.component';

describe('PlottrPlotlineComponent', () => {
  let component: PlottrPlotlineComponent;
  let fixture: ComponentFixture<PlottrPlotlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlottrPlotlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlottrPlotlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
