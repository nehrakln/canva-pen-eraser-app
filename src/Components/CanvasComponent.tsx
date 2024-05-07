import React, { useContext, CSSProperties } from 'react';
import { Stage, Layer, Line } from 'react-konva';
import { CanvasContext } from '../Controllers/CanvasController';

const CanvasComponent: React.FC = () => {
    const { model, startLine, addPointToLine, toggleMarker } = useContext(CanvasContext);

    const handleMouseDown = (e: any) => {
        startLine(e.evt.layerX, e.evt.layerY);
    };

    const cursorStyle: CSSProperties = {
        cursor: model.isErasing ? `url('/eraser.svg'), auto` : `url('/pencil.svg'), auto`
     };
    
    const handleMouseMove = (e: any) => {
        if (e.evt.buttons === 1) {  // left mouse button pressed
            addPointToLine(e.evt.layerX, e.evt.layerY);
        }
    };

  console.log("cursorStyle", cursorStyle)

  return (
    <div style={cursorStyle}>
      <button onClick={toggleMarker}>{model.isErasing ? 'Switch to Pen' : 'Switch to Eraser'}</button>
      <Stage width={window.innerWidth} height={window.innerHeight} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove}>
        <Layer>
          {model.lines.map((line, i) => (
            <Line key={i} points={line.points} stroke={line.color} strokeWidth={5} lineCap="round" lineJoin="round" />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default CanvasComponent;
