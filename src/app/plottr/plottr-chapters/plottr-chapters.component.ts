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
import { PlottrChapterComponent } from '@plottr/plottr-chapter/plottr-chapter.component';

@Component({
  selector: 'app-plottr-chapters',
  imports: [PlottrChapterComponent],
  templateUrl: './plottr-chapters.component.html',
  styleUrl: './plottr-chapters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlottrChaptersComponent {
  @Input({ required: true }) chapters: Chapter[] = [];
  @Output() changeChapterTitle: EventEmitter<EditChapterTitleEvent> =
    new EventEmitter();
  @Output() addChapter: EventEmitter<string> = new EventEmitter();

  emitChangeChapterTitle(event: { chapter: Chapter; title: string }): void {
    this.changeChapterTitle.emit(event);
  }

  addNewChapter(): void {
    this.addChapter.emit(`Chapter ${this.chapters.length + 1}`);
  }
}
