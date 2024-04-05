// Search.js
import { mdiMagnify } from "@lumx/icons";
import { TextField, Theme } from "@lumx/react";
import React, { useState } from "react";
import { useCharacters } from "../../Context/Context";

const ENTER_KEY = "Enter";

const Search = () => {
  const [query, setQuery] = useState("");
  const { handleSearch } = useCharacters();

  const handleInputChange = (event) => {
    setQuery(event);
  };

  const handleKeyPress = (event) => {
    if (event.key === ENTER_KEY) {
      query.length > 0 && handleSearch(query);
    }
  };

  return (
    <TextField
      theme={Theme.dark}
      placeholder="Search ..."
      icon={mdiMagnify}
      value={query}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
    />
  );
};

export default Search;
