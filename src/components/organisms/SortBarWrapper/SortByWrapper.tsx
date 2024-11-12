import SortBar from "@/components/molecules/SortBar";
import { SortDropDown } from "@/components/molecules/SortDropDown";
import { TSortByWrapperProps } from "./types";
import { EDisplayFileView } from "@/contexts/AppContext/enums";

const SortByWrapper = ({ displayFileView }: TSortByWrapperProps) => {
  return (
    <>
      {displayFileView === EDisplayFileView.LIST && <SortBar />}
      {displayFileView === EDisplayFileView.GRID && <SortDropDown />}
    </>
  );
};

export default SortByWrapper;
