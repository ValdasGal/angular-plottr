import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  Chapter,
  EditChapterTitleEvent,
} from '@plottr/interfaces/plottr.interface';

@Component({
  selector: 'app-plottr-chapter',
  imports: [ReactiveFormsModule],
  templateUrl: './plottr-chapter.component.html',
  styleUrl: './plottr-chapter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlottrChapterComponent {
  @Input({ required: true }) chapter?: Chapter;
  @Output() changeChapterTitle: EventEmitter<EditChapterTitleEvent> =
    new EventEmitter();

  @ViewChild('chapterTitleInput') chapterTitleInput?: ElementRef;

  chapterTitle = new FormControl('');

  isEditing = false;

  ngOnInit(): void {
    this.chapterTitle.setValue(this.chapter?.title ?? '');
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;

    if (this.isEditing) {
      // setTimeout() is used here to ensure that input is in the DOM before trying to focus on it.
      setTimeout(() => {
        this.chapterTitleInput?.nativeElement.focus();
      }, 1);
    }
  }

  editTitle(): void {
    if (this.chapter && this.chapterTitle.value) {
      this.changeChapterTitle.emit({
        chapter: this.chapter,
        title: this.chapterTitle.value,
      });
    }

    this.toggleEdit();
  }
}
