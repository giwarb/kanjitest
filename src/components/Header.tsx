import type { FC } from "react";
import { useState } from "react";
import { MenuDialog } from "./MenuDialog";
import "./Header.css";

interface HeaderProps {
  onReset: () => void;
  onBackToStart: () => void;
}

export const Header: FC<HeaderProps> = ({ onReset, onBackToStart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="header-content">かんじれんしゅう アプリ</div>
      <button
        type="button"
        className="menu-button"
        onClick={() => setIsMenuOpen(true)}
        aria-label="メニュー"
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          role="img"
          aria-labelledby="menuIcon"
        >
          <title id="menuIcon">メニュー</title>
          <path
            fill="currentColor"
            d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          />
        </svg>
      </button>
      <MenuDialog
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onReset={onReset}
        onBackToStart={onBackToStart}
      />
    </div>
  );
};
