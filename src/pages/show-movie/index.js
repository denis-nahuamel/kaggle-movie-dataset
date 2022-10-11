import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import { HeaderDialog } from "./components/HeaderDialog";


export default function MovieDetail({open, handleOpen,currentMovie}) {
  
    return (
      <div> 
        <Dialog
          onClose={()=>handleOpen(false)}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <HeaderDialog id="customized-dialog-title" onClose={()=>handleOpen(false)} >
          {currentMovie}
          </HeaderDialog>
          <DialogContent dividers>
            <div>{currentMovie?.overview}</div>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={()=>handleOpen(false)}>
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }