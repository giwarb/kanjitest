import { useState, useEffect, useRef, useCallback } from 'react';

interface Point {
  x: number;
  y: number;
}

export const useDrawingManager = (canvas: HTMLCanvasElement | null) => {
  const [userStrokes, setUserStrokes] = useState<Point[][]>([]);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const isDrawingRef = useRef(false);
  const currentStrokeRef = useRef<Point[]>([]);

  useEffect(() => {
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Failed to get 2D context');
    }

    ctxRef.current = context;

    const getCanvasCoord = (
      evt: MouseEvent | TouchEvent
    ): { x: number; y: number } => {
      const rect = canvas.getBoundingClientRect();
      return {
        x:
          (evt instanceof MouseEvent ? evt.clientX : evt.touches[0].clientX) -
          (rect?.left || 0),
        y:
          (evt instanceof MouseEvent ? evt.clientY : evt.touches[0].clientY) -
          (rect?.top || 0),
      };
    };

    const beginStroke = (evt: MouseEvent | TouchEvent) => {
      isDrawingRef.current = true;
      currentStrokeRef.current = [];
      const { x, y } = getCanvasCoord(evt);
      context.beginPath();
      context.moveTo(x, y);
      currentStrokeRef.current = [{ x, y }];
    };

    const drawStroke = (evt: MouseEvent | TouchEvent) => {
      if (!isDrawingRef.current) return;
      const { x, y } = getCanvasCoord(evt);
      context.lineTo(x, y);
      context.stroke();
      currentStrokeRef.current = [...currentStrokeRef.current, { x, y }];
    };

    const endStroke = () => {
      if (!isDrawingRef.current) return;
      isDrawingRef.current = false;
      context.closePath();
      if (currentStrokeRef.current.length > 2) {
        setUserStrokes((prev) => [...prev, [...currentStrokeRef.current]]);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      beginStroke(e);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDrawingRef.current) drawStroke(e);
    };

    const handleMouseUp = () => endStroke();
    const handleMouseLeave = () => endStroke();

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      const t = e.touches[0];
      const mouseEvent = new MouseEvent('mousedown', {
        clientX: t.clientX,
        clientY: t.clientY,
        bubbles: true,
        cancelable: true,
        view: window,
      });
      beginStroke(mouseEvent);
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (isDrawingRef.current) {
        const t = e.touches[0];
        const mouseEvent = new MouseEvent('mousemove', {
          clientX: t.clientX,
          clientY: t.clientY,
          bubbles: true,
          cancelable: true,
          view: window,
        });
        drawStroke(mouseEvent);
      }
    };

    const handleTouchEnd = () => endStroke();

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleTouchEnd);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, [canvas]);

  const clearStrokes = useCallback(() => {
    ctxRef.current?.clearRect(0, 0, canvas?.width || 0, canvas?.height || 0);
    setUserStrokes([]);
    isDrawingRef.current = false;
    currentStrokeRef.current = [];
  }, [canvas]);

  return { userStrokes, canvasContext: ctxRef.current, clearStrokes };
};
