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
          <HeaderDialog id="customized-dialog-title" onClose={handleClose} >
          {currentMovie}
          </HeaderDialog>
          <DialogContent dividers>
            <div>{currentMovie?.overview}</div>
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