"use client";

import React, { createContext, useReducer, useContext } from "react";
import { painterReducer } from "./painterReducer";
import type { PainterState, PainterAction } from "@/models/painter";
import { initialPainterState } from "@/models/painter";

// 1. Contexts
const PainterStateContext = createContext<PainterState | undefined>(undefined);
const PainterDispatchContext = createContext<React.Dispatch<PainterAction> | undefined>(undefined);

// 2. Provider
export const PainterProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(painterReducer, initialPainterState);

  return (
    <PainterStateContext.Provider value={state}>
      <PainterDispatchContext.Provider value={dispatch}>
        {children}
      </PainterDispatchContext.Provider>
    </PainterStateContext.Provider>
  );
};

// 3. Hooks
export const usePainterState = () => {
  const context = useContext(PainterStateContext);
  if (context === undefined) {
    throw new Error("usePainterState must be used within a PainterProvider");
  }
  return context;
};

export const usePainterDispatch = () => {
  const context = useContext(PainterDispatchContext);
  if (context === undefined) {
    throw new Error("usePainterDispatch must be used within a PainterProvider");
  }
  return context;
};

// Optional combined hook
export const usePainter = () => {
  return {
    state: usePainterState(),
    dispatch: usePainterDispatch(),
  };
};
