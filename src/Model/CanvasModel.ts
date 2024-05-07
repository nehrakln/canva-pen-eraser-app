// src/model/CanvasModel.ts
export type Line = {
    points: number[];
    color: string;
};

export interface CanvasModel {
    lines: Line[];
    color: string;
    isErasing: boolean;
}
export const defaultModel: CanvasModel = {
    lines: [],
    color: '#df4b26',
    isErasing: false,
};

// Helper functions
export function addLine(model: CanvasModel, line: Line): CanvasModel {
    return {
        ...model,
        lines: [...model.lines, line]
    };
}

export function toggleErasing(model: CanvasModel): CanvasModel {
    return {
        ...model,
        isErasing: !model.isErasing,
        color: model.isErasing ? '#df4b26' : '#ffffff'
    };
}
