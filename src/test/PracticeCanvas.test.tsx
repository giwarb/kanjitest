import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PracticeCanvas } from '../components/PracticeCanvas';

describe('PracticeCanvas', () => {
  const mockCanvasRef = { current: document.createElement('canvas') };
  const mockAnswerCanvasRef = { current: document.createElement('canvas') };
  const mockAnswerRef = { current: document.createElement('div') };

  const defaultProps = {
    canvasRef: mockCanvasRef,
    answerCanvasRef: mockAnswerCanvasRef,
    answerRef: mockAnswerRef,
    showAnswer: false,
    showSVG: false,
    svgContent: '<svg><path d="M0 0 L100 100" /></svg>',
    result: 'テスト結果',
  };

  it('練習用キャンバスが表示される', () => {
    const { container } = render(<PracticeCanvas {...defaultProps} />);
    const canvas = container.querySelector('canvas');
    expect(canvas).toBeDefined();
    expect(canvas).toHaveAttribute('width', '320');
    expect(canvas).toHaveAttribute('height', '320');
  });

  it('解答キャンバスは showAnswer が true の時のみ表示される', () => {
    const { container, rerender } = render(
      <PracticeCanvas {...defaultProps} />
    );
    const answerCanvas = container.querySelectorAll('canvas')[1];
    expect(answerCanvas).toHaveStyle('display: none');

    rerender(<PracticeCanvas {...defaultProps} showAnswer={true} />);
    expect(answerCanvas).toHaveStyle('display: block');
  });

  it('SVG は showSVG が true の時のみ表示される', () => {
    const { rerender } = render(<PracticeCanvas {...defaultProps} />);
    const svgContainer = screen.getByTestId('svg-container');
    expect(svgContainer).toHaveStyle('display: none');

    rerender(<PracticeCanvas {...defaultProps} showSVG={true} />);
    expect(svgContainer).toHaveStyle('display: block');
  });

  it('結果テキストが表示される', () => {
    render(<PracticeCanvas {...defaultProps} />);
    expect(screen.getByText('テスト結果')).toBeDefined();
  });

  it('SVG のサイズが 320x320 に調整される', () => {
    render(
      <PracticeCanvas
        {...defaultProps}
        svgContent='<svg width="100" height="100"><path d="M0 0 L100 100" /></svg>'
        showSVG={true}
      />
    );

    const svgContainer = screen.getByTestId('svg-container');
    expect(svgContainer.getAttribute('style')).toContain('width: 320');
    expect(svgContainer.getAttribute('style')).toContain('height: 320');
  });
});
