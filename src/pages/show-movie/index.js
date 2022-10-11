import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import { BoldStyle } from "../../styles/style";
import { HeaderDialog } from "./components/HeaderDialog";


export default function MovieDetail({open, handleOpen,currentMovie}) {
    console.log("current movie",currentMovie)
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
            <BoldStyle>Descripción: </BoldStyle>
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