"use client";
import { useAppContext } from "@/contexts/AppContext";
import { EAction } from "@/contexts/AppContext/enums";
import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

export const SearchBar = () => {
  const { state, dispatch } = useAppContext();
  const filterByText = state.filterByText;

  const handleFilterByText = async (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: EAction.SET_FILTERED_TEXT, value: e.target.value });
  };

  return (
    <Field className="flex items-center">
      <Label className="mr-2">Search for a file:</Label>
      <Input
        className={clsx(
          "w-50 rounded-lg border-none bg-black/5 py-1.5 px-3 text-black",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black"
        )}
        value={filterByText}
        onChange={handleFilterByText}
        placeholder="Start typing..."
      />
    </Field>
  );
};

export default SearchBar;
