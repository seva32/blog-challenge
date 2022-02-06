import React, { ChangeEvent, useState, FormEventHandler } from "react";
import { Input, Text, Button } from "../";
import { ReactComponent as SearchIcon } from "../../assets/images/SearchIcon.svg";
import { useBlogListContext } from "../../context";

type Props = {};

function SearchBar({}: Props) {
  const [searchText, setSearchText] = useState<string>("");
  const { blogList, setSearchString } = useBlogListContext();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }

  function handleSubmit() {
    setSearchString(searchText);
    setSearchText("");
  }

  const blogListLength = blogList.length;

  return (
    <div className="flex flex-row flex-nowrap items-center w-full rounded shadow-md bg-white h-14 p-4">
      <div className="flex justify-center pb-1">
        <SearchIcon />
      </div>
      <Text size="md" type="label" className="mx-4">
        Search
      </Text>
      <Input onChange={handleChange} className="flex-grow" value={searchText} />
      <Text
        size="sm"
        type="label"
        className="text-gray-300 tracking-widest px-4"
      >
        {blogListLength > 0
          ? `${blogListLength} RESULT${blogListLength > 1 ? "S" : ""}`
          : "NO RESULTS"}
      </Text>
      <Button size="md" type="submit" onClick={handleSubmit}>
        <Text size="md" type="label" className="text-white">
          Search
        </Text>
      </Button>
    </div>
  );
}

export { SearchBar };
