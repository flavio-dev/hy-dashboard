import SortIcon from "@/components/atoms/icons/SortIcon";
import React from "react";

const SortBar = () => {
  return (
    <div className="flex justify-between border-l border-r border-b pb-4 pt-4">
      <div className="w-6 mr-2 cursor-pointer">
        <SortIcon direction="down" />
      </div>
      <div className="flex-grow basis-0 cursor-pointer flex">
        <span>Name</span>
      </div>
      <div className="w-32 text-left cursor-pointer">Last Modified</div>
      <div className="w-24 text-left cursor-pointer">File size</div>
      <div className="w-6" />
    </div>
  );
};

export default SortBar;
