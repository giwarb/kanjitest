import { useState } from "react";
import { MenuDialog } from "./MenuDialog";
import { Ruby } from "./Ruby";
import "./Header.css";

const APP_VERSION = "v1.3";

interface HeaderProps {
  onReset: () => void;
  onBackToStart?: () => void;
  resetLabel?: string;
}

export function Header({ onReset, onBackToStart, resetLabel }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="header-content">
        <Ruby base="漢字" reading="かんじ" />
        <Ruby base="練習" reading="れんしゅう" />
        アプリ
        <span className="header-version" aria-label="バージョン">
          {APP_VERSION}
        </span>
      </div>
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
        resetLabel={resetLabel}
      />
    </div>
  );
}
