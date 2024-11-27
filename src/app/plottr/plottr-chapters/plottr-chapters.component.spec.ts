import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlottrChaptersComponent } from './plottr-chapters.component';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

describe('PlottrChaptersComponent', () => {
  let component: PlottrChaptersComponent;
  let fixture: ComponentFixture<PlottrChaptersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlottrChaptersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlottrChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#emitChangeChapterTitle', () => {
    it('should emit changeChapterTitle event', () => {
      const chapter = { id: '1', title: 'Chapter 1' };
      const title = 'Chapter 2';

      spyOn(component.changeChapterTitle, 'emit');

      component.emitChangeChapterTitle({ chapter, title });

      expect(component.changeChapterTitle.emit).toHaveBeenCalledWith({
        chapter,
        title,
      });
    });
  });

  describe('#addNewChapter', () => {
    it('should emit addNewChapterEvent', () => {
      spyOn(component.addChapter, 'emit');

      component.addNewChapter();

      expect(component.addChapter.emit).toHaveBeenCalledWith('Chapter 1');
    });
  });

  describe('#dropChapter', () => {
    it('should emit moveChapters event', () => {
      const chapters = [
        { id: '1', title: 'Chapter 1' },
        { id: '2', title: 'Chapter 2' },
      ];
      const previousIndex = 0;
      const currentIndex = 1;

      component.chapters = chapters;

      spyOn(component.moveChapters, 'emit');

      component.dropChapter({ previousIndex, currentIndex } as CdkDragDrop<
        string[]
      >);

      expect(component.moveChapters.emit).toHaveBeenCalledWith([
        chapters[1],
        chapters[0],
      ]);
    });
  });
});
