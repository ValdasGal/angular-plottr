import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { guidGenerator } from '@plottr/helper-functions/guid-generator';
import {
  Chapter,
  EditChapterTitleEvent,
  PlotLine,
  Scenes,
} from '@plottr/interfaces/plottr.interface';
import { PlottrChaptersComponent } from '@plottr/plottr-chapters/plottr-chapters.component';
import { PlottrPlotlinesComponent } from '@plottr/plottr-plotlines/plottr-plotlines.component';

@Component({
  selector: 'app-plottr-layout',
  imports: [PlottrChaptersComponent, PlottrPlotlinesComponent],
  templateUrl: './plottr-layout.component.html',
  styleUrl: './plottr-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlottrLayoutComponent {
  chapters = signal<Chapter[]>([]);
  plotLines = signal<PlotLine[]>([]);

  ngOnInit(): void {
    this.mockChapters();
    this.mockPlotlines();
  }

  mockChapters(): void {
    const chaptersToMock = 10;

    for (let i = 1; i <= chaptersToMock; i++) {
      this.addChapter(`Chapter ${i}`);
    }
  }

  mockPlotlines(): void {
    const plotlinesToMock = 2;

    for (let i = 1; i <= plotlinesToMock; i++) {
      const scenes: Scenes = {};

      if (i === 1) {
        scenes[this.chapters()[0].id] = [
          {
            id: guidGenerator(),
            title: 'Scene 1',
          },
        ];
        scenes[this.chapters()[4].id] = [
          {
            id: guidGenerator(),
            title: 'Scene 2',
          },
        ];
        scenes[this.chapters()[5].id] = [
          {
            id: guidGenerator(),
            title: 'Scene 3',
          },
        ];
        scenes[this.chapters()[9].id] = [
          {
            id: guidGenerator(),
            title: 'Scene 4',
          },
        ];
      } else if (i === 2) {
        scenes[this.chapters()[0].id] = [
          {
            id: guidGenerator(),
            title: 'Scene 1',
          },
        ];
        scenes[this.chapters()[2].id] = [
          {
            id: guidGenerator(),
            title: 'Scene 2',
          },
        ];
        scenes[this.chapters()[8].id] = [
          {
            id: guidGenerator(),
            title: 'Scene 3',
          },
        ];
        scenes[this.chapters()[9].id] = [
          {
            id: guidGenerator(),
            title: 'Scene 4',
          },
        ];
      }

      this.addPlotLine(`Plotline ${i}`, scenes);
    }
  }

  addChapter(title: string): void {
    this.chapters.set([...this.chapters(), { title, id: guidGenerator() }]);
  }

  changeChapterTitle(event: EditChapterTitleEvent): void {
    const { chapter, title: newTitle } = event;

    this.chapters.set([
      ...this.chapters().map((c) => {
        if (c.id === chapter.id) {
          return { ...c, title: newTitle };
        }

        return c;
      }),
    ]);
  }

  moveChapters(chapters: Chapter[]): void {
    this.chapters.set(chapters);
  }

  addPlotLine(title: string, scenes: Scenes = {}): void {
    this.plotLines.set([
      ...this.plotLines(),
      { title, id: guidGenerator(), scenes },
    ]);
  }

  addSceneToPlotLine(event: { plotline: PlotLine; chapterId: string }): void {
    const { plotline, chapterId } = event;
    const sceneNumber = plotline.scenes[chapterId]?.length + 1 || 1;
    const scene = {
      id: guidGenerator(),
      title: `Scene ${sceneNumber}`,
    };

    this.plotLines.set([
      ...this.plotLines().map((pl) => {
        if (pl.id === plotline.id) {
          return {
            ...pl,
            scenes: {
              ...pl.scenes,
              [chapterId]: [...(pl.scenes[chapterId] ?? []), scene],
            },
          };
        }

        return pl;
      }),
    ]);
  }
}
