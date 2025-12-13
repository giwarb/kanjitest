type RubyProps = {
  base: string;
  reading: string;
  className?: string;
};

export function Ruby({ base, reading, className }: RubyProps) {
  return (
    <ruby className={className}>
      <rb>{base}</rb>
      <rt>{reading}</rt>
    </ruby>
  );
}
