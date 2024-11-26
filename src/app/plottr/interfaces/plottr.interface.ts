export interface Chapter {
  id: string;
  title: string;
}

export interface PlotLine {
  id: string;
  title: string;
  scenes: Scenes;
}

export interface Scenes {
  [key: string]: Scene[];
}

interface Scene {
  id: string;
  title: string;
}

export interface EditChapterTitleEvent {
  chapter: Chapter;
  title: string;
}