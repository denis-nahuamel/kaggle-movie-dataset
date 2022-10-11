import styled from "@emotion/styled";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import { HeaderDialog } from "./components/HeaderDialog";


export default function MovieDetail({open, handleOpen}) {
  
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
          <HeaderDialog id="customized-dialog-title" onClose={handleClose}>
            Modal title
          </HeaderDialog>
          <DialogContent dividers>
            bebeses
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }