import { TableCell, TableHead, TableRow } from "@mui/material";
import { BoldStyle } from "../../../styles/style";

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
            <BoldStyle>{column.label}</BoldStyle>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
