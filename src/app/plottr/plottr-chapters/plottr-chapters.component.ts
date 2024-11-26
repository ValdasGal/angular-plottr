import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  Chapter,
  EditChapterTitleEvent,
} from '@plottr/interfaces/plottr.interface';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { PlottrChapterComponent } from '@plottr/plottr-chapter/plottr-chapter.component';

@Component({
  selector: 'app-plottr-chapters',
  imports: [CdkDropList, CdkDrag, PlottrChapterComponent],
  templateUrl: './plottr-chapters.component.html',
  styleUrl: './plottr-chapters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlottrChaptersComponent {
  @Input({ required: true }) chapters: Chapter[] = [];
  @Output() changeChapterTitle: EventEmitter<EditChapterTitleEvent> =
    new EventEmitter();
  @Output() addChapter: EventEmitter<string> = new EventEmitter();
  @Output() moveChapters: EventEmitter<Chapter[]> = new EventEmitter();

  emitChangeChapterTitle(event: { chapter: Chapter; title: string }): void {
    this.changeChapterTitle.emit(event);
  }

  addNewChapter(): void {
    this.addChapter.emit(`Chapter ${this.chapters.length + 1}`);
  }

  dropChapter(event: CdkDragDrop<string[]>) {
    const chapters = [...this.chapters];
    moveItemInArray(chapters, event.previousIndex, event.currentIndex);

    this.moveChapters.emit(chapters);
  }
}
