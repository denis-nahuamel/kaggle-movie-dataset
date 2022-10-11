import { RouteTwoTone } from "@mui/icons-material";
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import MovieDetail from "../show-movie";
// const useStyles = makeStyles({
//     table: {
//       minWidth: 650
//     }
//   });
export const HomePage = ({ columns, result }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const [currentMovie, setCurrentMovie] = useState();

  /*const createData = (original_title, status, vote_average, overview) => {
    return { original_title, status, vote_average,overview };
  };
  const rows = result.map((item) =>
    createData(item.original_title, item.status, item.vote_average,item.overview)
  );*/

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleOpenDialog = (movie) =>{
    setCurrentMovie(movie)
      setOpen(!open);
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(()=>{

  },[open])
  return (
    <>
    <Paper>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {result
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
        count={result.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    <MovieDetail open={open} handleOpen={handleOpenDialog} currentMovie={currentMovie}></MovieDetail>
    </>
  );
};
