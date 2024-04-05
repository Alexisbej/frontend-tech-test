import { useQuery } from "@tanstack/react-query";
import React, { createContext, useContext, useState } from "react";
import fetchCharacters from "../api/fetchCharacters";

const CharactersContext = createContext();

export const useCharacters = () => useContext(CharactersContext);

const ITEMS_PER_PAGE = 4;

export const CharactersProvider = ({ children }) => {
  const [queryString, setQueryString] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { isFetching, isError, error, data } = useQuery({
    queryKey: ["fetchCharacters", queryString, currentPage],
    queryFn: () => fetchCharacters(queryString, ITEMS_PER_PAGE, currentPage),
    keepPreviousData: true,
    enabled: !!queryString,
    initialData: { empty: true },
  });

  const totalPages = data ? Math.ceil(data.total / ITEMS_PER_PAGE) : 1;

  const handleSearch = (query) => {
    setQueryString(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <CharactersContext.Provider
      value={{
        queryString,
        isFetching,
        isError,
        error,
        data,
        totalPages,
        handleSearch,
        handlePageChange,
        currentPage,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
