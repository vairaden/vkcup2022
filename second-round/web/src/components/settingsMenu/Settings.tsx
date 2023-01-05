import LanguageMenu from "./LanguageMenu";
import ThemeMenu from "./ThemeMenu";

export default function Settings({
  closeCallback,
}: {
  closeCallback: () => void;
}) {
  return (
    <>
      <div
        onClick={closeCallback}
        className="bg-red-200 absolute top-0 left-0 h-[100vh] w-[100vw]"
      ></div>
      <div className="absolute bottom-0 left-0 w-[100vw] h-[400px] bg-blue-200">
        <h1>Settings</h1>
        <button onClick={closeCallback}>Close</button>
        <ThemeMenu />
        <LanguageMenu />
      </div>
    </>
  );
}
