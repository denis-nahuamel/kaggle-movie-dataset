import { TableCell, TableHead, TableRow } from "@mui/material";

export const TableHeadComponent = ({columns}) => {
  return (
    <TableHead>
      <TableRow>
        {columns?.map((column) => (
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
  );
};
