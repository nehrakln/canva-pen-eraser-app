import React from 'react';
import { CanvasController } from './Controllers/CanvasController';
import CanvasComponent from './Components/CanvasComponent';

const App: React.FC = () => {
  return (
    // @ts-ignore
    <CanvasController>
      <div className="App">
        <CanvasComponent />
      </div>
    </CanvasController>
  );
}

export default App;
