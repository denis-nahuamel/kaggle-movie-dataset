/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import { BoldStyle, ColumnContainer, RowContainer } from "../../styles/style";
import { HeaderDialog } from "./components/HeaderDialog";

export default function MovieDetail({ open, handleOpen, currentMovie }) {
  return (
    <div>
      <Dialog
        onClose={() => handleOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <HeaderDialog
          id="customized-dialog-title"
          onClose={() => handleOpen(false)}
        >
          {currentMovie}
        </HeaderDialog>
        <DialogContent dividers css={ColumnContainer}>
          <div>
            <BoldStyle>Descripción: </BoldStyle>
            <div>{currentMovie?.overview}</div>
          </div>

          <RowContainer>
            <BoldStyle>Rating: </BoldStyle>
            {currentMovie?.vote_average}
          </RowContainer>
          <RowContainer>
            <BoldStyle>Dirección: </BoldStyle>
            <a href={currentMovie?.homepage}>{currentMovie?.homepage}</a>
          </RowContainer>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => handleOpen(false)}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
