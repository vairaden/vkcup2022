import useMenuStore from "../../shared/store/useMenuStore";
import LetterCreator from "../../features/letter-creator";
import LetterList from "../../widgets/letter-list";
import LetterListHeader from "./LetterListHeader";
import Navbar from "../../widgets/navbar";
import Settings from "../../features/settings";
import FolderCreator from "../../features/folder-creator/FolderCreator";

export default function LetterListPage() {
  const settingsOpen = useMenuStore((state) => state.settingsOpen);
  const letterCreatorOpen = useMenuStore((state) => state.letterCreatorOpen);
  const folderCreatorOpen = useMenuStore((state) => state.folderCreatorOpen);

  return (
    <>
      <Navbar />
      <main className="ml-[68px] md:ml-[236px] mt-[68px] pr-[16px]">
        <LetterListHeader />
        <LetterList />
        {letterCreatorOpen && <LetterCreator />}
        {folderCreatorOpen && <FolderCreator />}
      </main>
      {settingsOpen && <Settings />}
    </>
  );
}
