import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useDrawingManager } from '../useDrawingManager';

describe('useDrawingManager', () => {
  let canvas: HTMLCanvasElement;
  let mockContext: CanvasRenderingContext2D;

  beforeEach(() => {
    vi.useFakeTimers();

    // キャンバス要素の作成
    canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 500;

    // コンテキストのモック作成
    mockContext = {
      beginPath: vi.fn(),
      moveTo: vi.fn(),
      lineTo: vi.fn(),
      stroke: vi.fn(),
      closePath: vi.fn(),
      clearRect: vi.fn(),
      canvas: canvas,
      strokeStyle: '#000000',
      lineWidth: 1,
      lineCap: 'round',
      lineJoin: 'round',
    } as unknown as CanvasRenderingContext2D;

    // getContextのモック化
    vi.spyOn(canvas, 'getContext').mockReturnValue(mockContext);
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.clearAllMocks();
  });

  it('初期状態で空のストローク配列を持つこと', async () => {
    const { result, rerender } = renderHook(() => useDrawingManager(canvas));
    rerender();
    expect(result.current.userStrokes).toEqual([]);
    expect(result.current.canvasContext).toBe(mockContext);
    expect(canvas.getContext).toHaveBeenCalledWith('2d');
  });

  it('マウスイベントで正しくストロークを記録すること', async () => {
    const { result } = renderHook(() => useDrawingManager(canvas));

    await act(async () => {
      canvas.dispatchEvent(
        new MouseEvent('mousedown', {
          clientX: 100,
          clientY: 100,
          bubbles: true,
        })
      );

      canvas.dispatchEvent(
        new MouseEvent('mousemove', {
          clientX: 150,
          clientY: 150,
          bubbles: true,
        })
      );

      canvas.dispatchEvent(
        new MouseEvent('mousemove', {
          clientX: 200,
          clientY: 200,
          bubbles: true,
        })
      );

      canvas.dispatchEvent(new MouseEvent('mouseup'));
    });

    expect(result.current.userStrokes).toHaveLength(1);
    expect(mockContext.beginPath).toHaveBeenCalled();
    expect(mockContext.stroke).toHaveBeenCalled();
    expect(mockContext.closePath).toHaveBeenCalled();
  });

  it('clearStrokesが正しく動作すること', async () => {
    const { result } = renderHook(() => useDrawingManager(canvas));

    await act(async () => {
      canvas.dispatchEvent(
        new MouseEvent('mousedown', {
          clientX: 100,
          clientY: 100,
          bubbles: true,
        })
      );

      canvas.dispatchEvent(
        new MouseEvent('mousemove', {
          clientX: 150,
          clientY: 150,
          bubbles: true,
        })
      );

      canvas.dispatchEvent(new MouseEvent('mouseup'));
    });

    await act(async () => {
      result.current.clearStrokes();
    });

    expect(result.current.userStrokes).toEqual([]);
    expect(mockContext.clearRect).toHaveBeenCalledWith(0, 0, 500, 500);
  });

  it('キャンバスがnullの場合は適切に処理すること', async () => {
    const { result } = renderHook(() => useDrawingManager(null));

    expect(result.current.userStrokes).toEqual([]);
    expect(result.current.canvasContext).toBeNull();
  });

  it('短すぎるストロークは記録しないこと', async () => {
    const { result } = renderHook(() => useDrawingManager(canvas));

    await act(async () => {
      canvas.dispatchEvent(
        new MouseEvent('mousedown', {
          clientX: 100,
          clientY: 100,
          bubbles: true,
        })
      );

      canvas.dispatchEvent(new MouseEvent('mouseup'));
    });

    expect(result.current.userStrokes).toHaveLength(0);
  });

  it('マウスリーブイベントでストロークが終了すること', async () => {
    const { result } = renderHook(() => useDrawingManager(canvas));

    await act(async () => {
      canvas.dispatchEvent(
        new MouseEvent('mousedown', {
          clientX: 100,
          clientY: 100,
          bubbles: true,
        })
      );

      canvas.dispatchEvent(
        new MouseEvent('mousemove', {
          clientX: 150,
          clientY: 150,
          bubbles: true,
        })
      );

      canvas.dispatchEvent(
        new MouseEvent('mousemove', {
          clientX: 200,
          clientY: 200,
          bubbles: true,
        })
      );

      canvas.dispatchEvent(new MouseEvent('mouseleave'));
    });

    expect(result.current.userStrokes).toHaveLength(1);
    expect(mockContext.closePath).toHaveBeenCalled();
  });
});
