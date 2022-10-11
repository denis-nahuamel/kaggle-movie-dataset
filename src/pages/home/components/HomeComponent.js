import { Fragment, useEffect, useState } from "react";
import Papa from "papaparse";
import { HomePage } from "..";
import SearchBar from "./SearchBarComponent";

export const HomeComponent = () => {
  // State to store parsed data
  const [rows, setRows] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  //State to store table Column name
  const [columns, setColumns] = useState([]);
  const [search, setSearch] = useState();

  const onSearchChange = (searchQuery) => {
    let response = rows.filter((e) =>
      e.original_title.toLowerCase().includes(searchQuery)
    );
    setFilteredData(response);
    setSearch(searchQuery);
  };

  const parserColumns = (columns) => {
    return columns
      .filter((e) => {
        if (e === "original_title" || e === "status" || e === "vote_average")
          return e;
      })
      .map((e) => {
        return { id: e, label: e };
      });
  };

  const changeHandler = (event) => {
    Papa.parse(event, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const rowsArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
        });
        // Parsed Data Response in array format
        setRows(results.data);
        setFilteredData(results.data);
        // Filtered Column Names
        setColumns(parserColumns(rowsArray[0]));
      },
    });
  };
  useEffect(() => {
    changeHandler("./tmdb_5000_movies.csv");
  }, []);
  return (
    <>
      <Fragment>
        <SearchBar onSearch={onSearchChange} value={search}></SearchBar>
      </Fragment>
      <HomePage columns={columns} result={filteredData}></HomePage>
    </>
  );
};
