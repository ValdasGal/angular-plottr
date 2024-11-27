import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlottrChapterComponent } from './plottr-chapter.component';

describe('PlottrChapterComponent', () => {
  let component: PlottrChapterComponent;
  let fixture: ComponentFixture<PlottrChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlottrChapterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlottrChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should set chapter title', () => {
      component.chapter = { title: 'Chapter 1', id: '' };

      component.ngOnInit();

      expect(component.chapterTitle.value).toBe('Chapter 1');
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
    it('should emit editTitle event', () => {
      component.chapter = { title: 'Chapter 1', id: '' };
      component.chapterTitle.setValue('Chapter 2');
      spyOn(component.changeChapterTitle, 'emit');

      component.editTitle();

      expect(component.changeChapterTitle.emit).toHaveBeenCalledWith({
        chapter: { title: 'Chapter 1', id: '' },
        title: 'Chapter 2',
      });
    });
  });
});
