import useMenuStore from "../../shared/store/useMenuStore";
import LetterCard from "../../widgets/letter-card/LetterCard";
import LetterCreator from "../../features/letter-creator";
import Navbar from "../../widgets/navbar";
import Settings from "../../features/settings";
import LetterDetailsHeader from "./LetterDetailsHeader";
import FolderCreator from "../../features/folder-creator/FolderCreator";

export default function LetterDetailsPage() {
  const settingsOpen = useMenuStore((state) => state.settingsOpen);
  const letterCreatorOpen = useMenuStore((state) => state.letterCreatorOpen);
  const folderCreatorOpen = useMenuStore((state) => state.folderCreatorOpen);

  return (
    <>
      <Navbar />
      <main className="ml-[68px] md:ml-[236px] mt-[68px] pr-[16px]">
        <LetterDetailsHeader />
        <LetterCard />
        {letterCreatorOpen && <LetterCreator />}
        {folderCreatorOpen && <FolderCreator />}
      </main>
      {settingsOpen && <Settings />}
    </>
  );
}
