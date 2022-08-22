import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "@mui/material";

interface Props {}

const DiscardButton: React.FC<Props> = () => {
  return (
    <Button
      variant="contained"
      onClick={() => {
        if (window.confirm(`do you want to discard all changes?`))
          window.location.reload();
      }}
      startIcon={<ClearIcon />}
    >
      Discard changes
    </Button>
  );
};

export default DiscardButton;
