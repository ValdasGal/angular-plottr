import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlottrPlotlinesComponent } from './plottr-plotlines.component';

describe('PlottrPlotlinesComponent', () => {
  let component: PlottrPlotlinesComponent;
  let fixture: ComponentFixture<PlottrPlotlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlottrPlotlinesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlottrPlotlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#addNewPlotLine', () => {
    it('should emit addPlotline event', () => {
      spyOn(component.addPlotLine, 'emit');

      component.addNewPlotLine();

      expect(component.addPlotLine.emit).toHaveBeenCalledWith('Plotline 1');
    });
  });
});
