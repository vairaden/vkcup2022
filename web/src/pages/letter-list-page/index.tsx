import useMenuStore from "../../shared/store/useMenuStore";
import LetterCreator from "../../features/letter-creation-form/LetterCreator";
import LetterList from "../../widgets/letter-list";
import LetterListHeader from "../../widgets/LetterListHeader";
import Navbar from "../../widgets/navbar";
import Settings from "../../features/settings";

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
