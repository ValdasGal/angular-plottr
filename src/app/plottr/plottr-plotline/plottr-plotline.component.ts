import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  AddSceneEvent,
  Chapter,
  PlotLine,
} from '@plottr/interfaces/plottr.interface';

@Component({
  selector: 'app-plottr-plotline',
  imports: [],
  templateUrl: './plottr-plotline.component.html',
  styleUrl: './plottr-plotline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlottrPlotlineComponent {
  @Input({ required: true }) plotLine?: PlotLine;
  @Input({ required: true }) chapters: Chapter[] = [];
  @Output() addScene: EventEmitter<AddSceneEvent> = new EventEmitter();

  emitAddScene(plotline: PlotLine, chapterId: string): void {
    this.addScene.emit({ plotline, chapterId });
  }
}
