import useMenuStore from "../../shared/store/useMenuStore";
import LetterCard from "../../widgets/LetterCard";
import LetterCreator from "../../widgets/LetterCreator";
import Navbar from "../../widgets/Navbar";
import Settings from "../../widgets/Settings";
import LetterDetailsHeader from "../../widgets/LetterDetailsHeader";

export default function LetterDetailsPage() {
  const settingsOpen = useMenuStore((state) => state.settingsOpen);
  const letterCreatorOpen = useMenuStore((state) => state.letterCreatorOpen);

  return (
    <>
      <Navbar />
      <main className="ml-[68px] md:ml-[236px] mt-[68px] pr-[16px]">
        <LetterDetailsHeader />
        <LetterCard />
        {letterCreatorOpen && <LetterCreator />}
      </main>
      {settingsOpen && <Settings />}
    </>
  );
}
