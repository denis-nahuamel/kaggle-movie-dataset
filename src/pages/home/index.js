import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import MovieDetail from "../show-movie";
import { TableHeadComponent } from "./components/TableHeadComponent";

export const HomePage = ({ columns, result }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const [currentMovie, setCurrentMovie] = useState();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleOpenDialog = (movie) =>{
    setCurrentMovie(movie)
    setOpen(true);
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
    <Paper>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHeadComponent columns={columns}></TableHeadComponent>
          <TableBody>
            {result?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} onClick={()=>handleOpenDialog(row)}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20, 25, 50, 100]}
        component="div"
        count={result?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    <MovieDetail open={open} handleOpen={setOpen} currentMovie={currentMovie}></MovieDetail>
    </>
  );
};
