export interface PainterState {
  brushColor: string;
  brushSize: number;
  svgUrl: string | null;
  usedColors: string[];
}

export type PainterAction =
  | { type: "SET_BRUSH_COLOR"; color: string }
  | { type: "SET_BRUSH_SIZE"; size: number }
  | { type: "ADD_USED_COLOR"; color: string }
  | { type: "SET_SVG_URL"; url: string | null };

export const initialPainterState: PainterState = {
  brushColor: "#000000",
  brushSize: 5,
  svgUrl: null,
  usedColors: []
};
