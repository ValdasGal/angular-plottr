import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Chapter, PlotLine } from '@plottr/interfaces/plottr.interface';

@Component({
  selector: 'app-plottr-plotlines',
  imports: [],
  templateUrl: './plottr-plotlines.component.html',
  styleUrl: './plottr-plotlines.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlottrPlotlinesComponent {
  @Input({ required: true }) plotLines: PlotLine[] = [];
  @Input({ required: true }) chapters: Chapter[] = [];
  @Output() addScene: EventEmitter<{
    plotline: PlotLine;
    chapterId: string;
  }> = new EventEmitter();
  @Output() addPlotLine: EventEmitter<string> = new EventEmitter();

  emitAddScene(plotline: PlotLine, chapterId: string): void {
    this.addScene.emit({ plotline, chapterId });
  }

  addNewPlotLine(): void {
    this.addPlotLine.emit(`Plotline ${this.plotLines.length + 1}`);
  }
}
