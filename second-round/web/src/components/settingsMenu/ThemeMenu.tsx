const colors = [
  "#35385A",
  "#388E3C",
  "#424242",
  "#4A352F",
  "#5A355A",
  "#646ECB",
  "#81D8D0",
  "#C9D0FB",
  "#D0F0F7",
  "#DDF3FF",
  "#E2DCD2",
  "#E73672",
  "#E7EED2",
  "#F0F0F0",
  "#F44336",
  "#FFEBCD",
];

export default function ThemeMenu() {
  return (
    <div className="flex flex-col">
      <h2>Настройки внешнего вида вашей почты и темы оформления</h2>
      <div className="grid grid-cols-8">
        {Array.from({ length: 16 }, (_, i) => i).map((i) => (
          <label>
            <input type="radio" name="theme" value={i} />
            <div className="w-10 h-10" style={{ background: colors[i] }} />
          </label>
        ))}
      </div>
      <img
        className="w-20 h-12"
        src="/dark-theme-image.svg"
        alt="Темная тема"
      ></img>
      <img
        className="w-20 h-12"
        src="/light-theme-image.svg"
        alt="Светлая тема"
      ></img>
      <img
        className="w-20 h-12"
        src="/image-theme.svg"
        alt="Тема с изображением"
      ></img>
    </div>
  );
}
