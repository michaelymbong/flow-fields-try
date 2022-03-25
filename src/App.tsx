import { useEffect, useRef } from "react";
import { generateField } from "@romellogoodman/flow-field";
import "./App.css";
import { Point } from "./types";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const windCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef?.current;
    const context = canvas?.getContext("2d");
    const field = generateField({
      count: 3000,
      height: 500,
      width: 500,
      margin: 0,
      amplitude: 10,
    });

    if (canvas) {
      canvas.width = 500;
      canvas.height = 500;
      canvas.style.background = `-webkit-linear-gradient(${getRandomAngle()}deg, ${getRandomColor()}, ${getRandomColor()})`;
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

        context.strokeStyle = getRandomColor();

        context.stroke();
      }
    });
  }, [canvasRef]);

  useEffect(() => {
    const canvas = windCanvasRef?.current;
    const context = canvas?.getContext("2d");
    const field: Point[] = generateField({
      amplitude: 100,
      count: 1500,
      damping: 0.1,
      height: 500,
      width: 500,
      scale: 0.5,
      margin: 0,
    });

    if (canvas) {
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

        context.strokeStyle = getRandomColor();

        context.stroke();
      }
    });
  }, [windCanvasRef]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Flow fields</p>
      </header>
      <div className="App-body">
        <div>
          <canvas ref={canvasRef} className="canvas" />
        </div>
        <div>
          <canvas ref={windCanvasRef} className="canvas" />
        </div>
      </div>
    </div>
  );
}

function getRandomColor(): string {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomAngle(): number {
  return Math.random() * 360;
}

export default App;
