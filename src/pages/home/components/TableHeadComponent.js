import styled from "@emotion/styled";
import { TableCell, TableHead, TableRow } from "@mui/material";
const HeaderStyle = styled.div`
    font-weight:bold;
`
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
            <HeaderStyle>{column.label}</HeaderStyle>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
