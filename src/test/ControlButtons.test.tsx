import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { ControlButtons } from '../components/ControlButtons';

describe('ControlButtons', () => {
  const mockHandlers = {
    onEvaluate: vi.fn(),
    onClear: vi.fn(),
    onDontKnow: vi.fn(),
    onNextQuestion: vi.fn(),
    onReset: vi.fn(),
  };

  const defaultProps = {
    showNext: false,
    hasStrokes: true,
    ...mockHandlers,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('通常時は評価・クリア・わからないボタンが表示される', () => {
    render(<ControlButtons {...defaultProps} />);

    expect(screen.getByRole('button', { name: 'ひょうか' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'クリア' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'わからない' })).toBeDefined();
    expect(screen.queryByText('つぎの もんだいへ')).toBeNull();
  });

  it('showNext が true の時は次の問題へボタンが表示される', () => {
    render(<ControlButtons {...defaultProps} showNext={true} />);

    expect(screen.queryByText('ひょうか')).toBeNull();
    expect(screen.queryByText('クリア')).toBeNull();
    expect(screen.queryByText('わからない')).toBeNull();
    expect(
      screen.getByRole('button', { name: 'つぎの もんだいへ' })
    ).toBeDefined();
  });

  it('ストロークがない時は評価・クリアボタンが無効になる', () => {
    render(<ControlButtons {...defaultProps} hasStrokes={false} />);

    expect(screen.getByRole('button', { name: 'ひょうか' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'クリア' })).toBeDisabled();
    expect(
      screen.getByRole('button', { name: 'わからない' })
    ).not.toBeDisabled();
  });

  it('さいしょからボタンは常に表示される', () => {
    const { rerender } = render(<ControlButtons {...defaultProps} />);
    expect(screen.getByRole('button', { name: 'さいしょから' })).toBeDefined();

    rerender(<ControlButtons {...defaultProps} showNext={true} />);
    expect(screen.getByRole('button', { name: 'さいしょから' })).toBeDefined();
  });

  it('各ボタンのクリックで対応するハンドラーが呼ばれる', () => {
    const { rerender } = render(<ControlButtons {...defaultProps} />);

    // 通常時のボタン
    fireEvent.click(screen.getByRole('button', { name: 'ひょうか' }));
    expect(mockHandlers.onEvaluate).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByRole('button', { name: 'クリア' }));
    expect(mockHandlers.onClear).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByRole('button', { name: 'わからない' }));
    expect(mockHandlers.onDontKnow).toHaveBeenCalledTimes(1);

    // 次の問題へボタン
    rerender(<ControlButtons {...defaultProps} showNext={true} />);
    fireEvent.click(screen.getByRole('button', { name: 'つぎの もんだいへ' }));
    expect(mockHandlers.onNextQuestion).toHaveBeenCalledTimes(1);

    // さいしょからボタン
    fireEvent.click(screen.getByRole('button', { name: 'さいしょから' }));
    expect(mockHandlers.onReset).toHaveBeenCalledTimes(1);
  });
});
