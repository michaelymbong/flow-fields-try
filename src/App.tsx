import React, { useEffect, useRef } from "react";
import { generateField } from "@romellogoodman/flow-field";
import "./App.css";
import { Point } from "./types";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef?.current;
    const context = canvas?.getContext("2d");
    const field = generateField({
      count: 1000,
      height: 500,
      width: 500,
      margin: 0,
      amplitude: 10,
    });

    if (!!canvas) {
      canvas.width = 500;
      canvas.height = 500;
    }

    field.forEach((point: Point) => {
      const [start, ...pts] = point.line || [];

      if (!start) return;

      if (context) {
        context.beginPath();
        context.moveTo(start[0], start[1]);

        pts.forEach((pt) => {
          context.lineTo(pt[0], pt[1]);
        });

        context.strokeStyle = "black";
        context.stroke();
      }
    });
  }, [canvasRef]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Flow fields</p>
      </header>
      <div className="App-body">
        <canvas ref={canvasRef} className="canvas" />
      </div>
    </div>
  );
}

export default App;
