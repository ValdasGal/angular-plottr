import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlottrPlotlineComponent } from './plottr-plotline.component';

describe('PlottrPlotlineComponent', () => {
  let component: PlottrPlotlineComponent;
  let fixture: ComponentFixture<PlottrPlotlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlottrPlotlineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlottrPlotlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should set plotline title', () => {
      component.plotLine = { title: 'test' } as any;
      component.ngOnInit();

      expect(component.plotlineTitle.value).toBe('test');
    });
  });

  describe('#toggleEdit', () => {
    it('should toggle edit mode', () => {
      component.isEditing = false;
      component.toggleEdit();

      expect(component.isEditing).toBe(true);
      component.toggleEdit();

      expect(component.isEditing).toBe(false);
    });
  });

  describe('#editTitle', () => {
    it('should emit edit title event', () => {
      component.plotLine = { title: 'test' } as any;
      component.plotlineTitle.setValue('new title');
      spyOn(component.changePlotlineTitle, 'emit');
      component.editTitle();

      expect(component.changePlotlineTitle.emit).toHaveBeenCalledWith({
        plotline: { title: 'test' } as any,
        title: 'new title',
      });
    });
  });

  describe('#emitAddScene', () => {
    it('should emit addScene event', () => {
      component.plotLine = { title: 'test' } as any;
      spyOn(component.addScene, 'emit');
      component.emitAddScene({ title: 'test' } as any, 'chapterId');

      expect(component.addScene.emit).toHaveBeenCalledWith({
        plotline: { title: 'test' } as any,
        chapterId: 'chapterId',
      });
    });
  });
});
