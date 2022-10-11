import styled from "@emotion/styled";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import { HeaderDialog } from "./components/HeaderDialog";


export default function MovieDetail({open, handleOpen,currentMovie}) {
    console.log("current", currentMovie)
    const handleClose = () => {
        handleOpen(false);
    };
  
    return (
      <div> 
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <HeaderDialog id="customized-dialog-title" onClose={handleClose} genres={currentMovie?.genres}>
          {currentMovie?.original_title}
          </HeaderDialog>
          <DialogContent dividers>
            {currentMovie?.overview}
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }