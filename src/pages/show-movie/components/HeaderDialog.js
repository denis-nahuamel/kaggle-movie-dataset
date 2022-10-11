import { DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Subtitle } from "./SubtitleComponent";
import { BoldStyle } from "../../../styles/style";

export const HeaderDialog = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      <div>
        <BoldStyle>{children.original_title}</BoldStyle>
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </div>
      <Subtitle genres={children.genres} runtime={children.runtime} date={children.release_date}></Subtitle>
    </DialogTitle>
  );
};
