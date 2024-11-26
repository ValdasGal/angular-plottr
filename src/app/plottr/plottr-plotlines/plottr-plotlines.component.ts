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
  EditPlotlineTitleEvent,
  PlotLine,
} from '@plottr/interfaces/plottr.interface';
import { PlottrPlotlineComponent } from '@plottr/plottr-plotline/plottr-plotline.component';

@Component({
  selector: 'app-plottr-plotlines',
  imports: [PlottrPlotlineComponent],
  templateUrl: './plottr-plotlines.component.html',
  styleUrl: './plottr-plotlines.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlottrPlotlinesComponent {
  @Input({ required: true }) plotLines: PlotLine[] = [];
  @Input({ required: true }) chapters: Chapter[] = [];
  @Output() addScene: EventEmitter<AddSceneEvent> = new EventEmitter();
  @Output() addPlotLine: EventEmitter<string> = new EventEmitter();
  @Output() changePlotlineTitle: EventEmitter<EditPlotlineTitleEvent> =
    new EventEmitter();

  emitAddScene(event: AddSceneEvent): void {
    this.addScene.emit(event);
  }

  addNewPlotLine(): void {
    this.addPlotLine.emit(`Plotline ${this.plotLines.length + 1}`);
  }

  emitChangePlotlineTitle(event: EditPlotlineTitleEvent): void {
    this.changePlotlineTitle.emit(event);
  }
}
