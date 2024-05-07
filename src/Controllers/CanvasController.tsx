import React, { createContext, useState } from 'react';
import { CanvasModel, defaultModel, addLine, toggleErasing} from '../Model/CanvasModel';



interface CanvasContextType {
  model: CanvasModel;
  startLine: (x: number, y: number) => void;
  addPointToLine: (x: number, y: number) => void;
  toggleMarker: () => void;
}

export const CanvasContext = createContext<CanvasContextType>({} as CanvasContextType);

// @ts-ignore
export const CanvasController: React.FC = ({ children }) => {
  const [model, setModel] = useState<CanvasModel>(defaultModel);

  const startLine = (x: number, y: number) => {
    setModel(currentModel => addLine(currentModel, { points: [x, y], color: currentModel.color }));
  };

  const addPointToLine = (x: number, y: number) => {
    setModel(currentModel => {
      const lastLine = currentModel.lines[currentModel.lines.length - 1];
      const updatedLastLine = {
        ...lastLine,
        points: lastLine.points.concat([x, y])
      };
      return {
        ...currentModel,
        lines: [...currentModel.lines.slice(0, -1), updatedLastLine]
      };
    });
  }

  const toggleMarker = () => {
    setModel(currentModel => toggleErasing(currentModel));
  };


  return (
    <CanvasContext.Provider value={{ model, startLine, addPointToLine, toggleMarker }}>
      {children}
    </CanvasContext.Provider>
  );
};
