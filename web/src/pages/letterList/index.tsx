import useMenuStore from "../../shared/store/useMenuStore";
import LetterCreator from "../../widgets/LetterCreator";
import LetterList from "../../widgets/LetterList";
import LetterListHeader from "../../widgets/LetterListHeader";
import Navbar from "../../widgets/Navbar";
import Settings from "../../widgets/Settings";

export default function LetterListPage() {
  const settingsOpen = useMenuStore((state) => state.settingsOpen);
  const letterCreatorOpen = useMenuStore((state) => state.letterCreatorOpen);

  return (
    <>
      <Navbar />
      <main className="ml-[68px] md:ml-[236px] mt-[68px] pr-[16px]">
        <LetterListHeader />
        <LetterList />
        {letterCreatorOpen && <LetterCreator />}
      </main>
      {settingsOpen && <Settings />}
    </>
  );
}
