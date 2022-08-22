import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";

interface Props {
  handleAdd: () => void;
  editMode: boolean;
  changeEditMode: (editState: boolean) => void;
}

const AddToDoItem: React.FC<Props> = ({
  handleAdd,
  editMode,
  changeEditMode,
}) => {
  let sign = "Go to Edit Mode";

  if (editMode) {
    sign = "Add item";
  }
  return (
    <Button
      variant="contained"
      startIcon={editMode ? <AddIcon /> : <EditIcon />}
      onClick={() => {
        editMode ? handleAdd() : changeEditMode(!editMode);
      }}
    >
      {sign}
    </Button>
  );
};

export default AddToDoItem;
