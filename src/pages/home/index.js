import { Fragment, useEffect, useState } from "react";
import { TableContainerPage } from "./components/TableContainerContainer";
import SearchBar from "./components/SearchBarComponent";
import { getMovies } from "../../services/movie.service";
import styled from "@emotion/styled";

const HomeContainer = styled.div`
  margin:20px;
`
export const MoviePage = () => {
  const [rows, setRows] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [columns, setColumns] = useState([]);
  const [search, setSearch] = useState();

  const onSearchChange = (searchQuery) => {
    setSearch(searchQuery);
    let response = rows.filter((e) =>
      e.original_title.toLowerCase().includes(searchQuery)
    );
    setFilteredData(response);
  };

  useEffect(() => {
    try{
    getMovies().then(response=>{
      // get all the movies
      setRows(response[0]);
      setFilteredData(response[0]);
      // Filtered Column Names
      setColumns(response[1]);
    });
    }
    catch(e){
      console.log("error",e)
    }
      
  }, []);
  return (
    <HomeContainer>
      <Fragment>
        <SearchBar onSearch={onSearchChange} value={search} ></SearchBar>
      </Fragment>
      <TableContainerPage columns={columns} result={filteredData}></TableContainerPage>
    </HomeContainer>
  );
};
