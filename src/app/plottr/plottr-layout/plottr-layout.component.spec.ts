import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlottrLayoutComponent } from './plottr-layout.component';

describe('PlottrLayoutComponent', () => {
  let component: PlottrLayoutComponent;
  let fixture: ComponentFixture<PlottrLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlottrLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlottrLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#addChapter', () => {
    it('should add chapter to signal', () => {
      component.chapters.set([]);
      component.addChapter('Chapter 1');

      expect(component.chapters().length).toBe(1);
    });
  });

  describe('#changeChapterTitle', () => {
    it('should change chapter title', () => {
      const chapter = { id: '1', title: 'Chapter 1' };
      component.chapters.set([chapter]);
      component.changeChapterTitle({ chapter, title: 'Chapter 2' });

      expect(component.chapters()[0].title).toBe('Chapter 2');
    });
  });

  describe('#moveChapters', () => {
    it('should update chapters', () => {
      const chapter1 = { id: '1', title: 'Chapter 1' };
      const chapter2 = { id: '2', title: 'Chapter 2' };
      component.chapters.set([chapter1, chapter2]);
      component.moveChapters([chapter2, chapter1]);

      expect(component.chapters()).toEqual([chapter2, chapter1]);
    });
  });

  describe('#addPlotLine', () => {
    it('should add plotline', () => {
      component.plotLines.set([]);
      component.addPlotLine('Plotline 1', {});

      expect(component.plotLines().length).toBe(1);
    });
  });

  describe('#changePlotlineTitle', () => {
    it('should change plotline title', () => {
      const plotline = {
        id: '1',
        title: 'Plotline 1',
        color: '#ffffff',
        scenes: {},
      };
      component.plotLines.set([plotline]);
      component.changePlotlineTitle({ plotline, title: 'Plotline 2' });

      expect(component.plotLines()[0].title).toBe('Plotline 2');
    });
  });

  describe('#addSceneToPlotLine', () => {
    it('should add scene to plotline', () => {
      const plotline = {
        id: '1',
        title: 'Plotline 1',
        color: '#ffffff',
        scenes: {},
      };
      component.plotLines.set([plotline]);
      component.addSceneToPlotLine({ plotline, chapterId: '1' });

      expect(component.plotLines()[0].scenes['1'].length).toBe(1);
    });
  });
});
