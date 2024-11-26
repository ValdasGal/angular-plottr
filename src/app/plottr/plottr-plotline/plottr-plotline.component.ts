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
  AddSceneEvent,
  Chapter,
  EditPlotlineTitleEvent,
  PlotLine,
} from '@plottr/interfaces/plottr.interface';

@Component({
  selector: 'app-plottr-plotline',
  imports: [ReactiveFormsModule],
  templateUrl: './plottr-plotline.component.html',
  styleUrl: './plottr-plotline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlottrPlotlineComponent {
  @Input({ required: true }) plotLine?: PlotLine;
  @Input({ required: true }) chapters: Chapter[] = [];
  @Output() addScene: EventEmitter<AddSceneEvent> = new EventEmitter();
  @Output() changePlotlineTitle: EventEmitter<EditPlotlineTitleEvent> =
    new EventEmitter();

  @ViewChild('plotlineTitleInput') plotlineTitleInput?: ElementRef;

  plotlineTitle = new FormControl('');

  isEditing = false;

  ngOnInit(): void {
    this.plotlineTitle.setValue(this.plotLine?.title ?? '');
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;

    if (this.isEditing) {
      // setTimeout() is used here to ensure that input is in the DOM before trying to focus on it.
      setTimeout(() => {
        this.plotlineTitleInput?.nativeElement.focus();
      }, 1);
    }
  }

  editTitle(): void {
    if (this.plotLine && this.plotlineTitle.value) {
      this.changePlotlineTitle.emit({
        plotline: this.plotLine,
        title: this.plotlineTitle.value,
      });
    }

    this.toggleEdit();
  }

  emitAddScene(plotline: PlotLine, chapterId: string): void {
    this.addScene.emit({ plotline, chapterId });
  }
}
