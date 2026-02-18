// We may want to move this to src/reducers directory eventually
import { PainterState, PainterAction } from "@/models/painter";

export function painterReducer(state: PainterState, action: PainterAction): PainterState {
  switch (action.type) {
    case "SET_BRUSH_COLOR":
      return { ...state, brushColor: action.color };
    case "SET_BRUSH_SIZE":
      return { ...state, brushSize: action.size };
    case "ADD_USED_COLOR":
      if (!state.usedColors.includes(action.color)) {
        return {
          ...state,
          usedColors: [...state.usedColors, action.color]
        };
      }
      return state;
    case "SET_SVG_URL":
      return { ...state, svgUrl: action.url };
    default:
      return state;
  }
}
