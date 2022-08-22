import SaveIcon from "@mui/icons-material/Save";
import { Button } from "@mui/material";
import { PostType } from "../Types/types";

interface Props {
  noEmptyRows: (posts: PostType[]) => boolean;
  setEditMode: (state: boolean) => void;
  saveChanges: () => void;
  posts: PostType[];
}

const SubmitButton: React.FC<Props> = ({
  noEmptyRows,
  setEditMode,
  saveChanges,
  posts,
}) => {
  return (
    <Button
      variant="contained"
      type="submit"
      startIcon={<SaveIcon />}
      onClick={() => {
        if (window.confirm(`do you want to save all changes?`))
          if (noEmptyRows(posts)) {
            setEditMode(false);
            saveChanges();
          }
      }}
    >
      Save changes
    </Button>
  );
};

export default SubmitButton;
