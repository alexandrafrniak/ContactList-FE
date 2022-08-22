import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Input, TableCell, TableRow } from "@mui/material";
import { PostType } from "../Types/types";

interface Props {
  editMode: boolean;
  row: PostType;
  handleLastNameChange: (newString: string, postId: number) => void;
  handleFirstNameChange: (newString: string, postId: number) => void;
  handlePhoneNumberChange: (newString: string, postId: number) => void;
  handleEmailChange: (newString: string, postId: number) => void;
  setEditMode: (editState: boolean) => void;
  handleItemDelete: (delItemId: number) => void;
}

const TableRows: React.FC<Props> = ({
  editMode,
  row,
  handleItemDelete,
  handleLastNameChange,
  handleFirstNameChange,
  handlePhoneNumberChange,
  handleEmailChange,
  setEditMode,
}) => {
  return (
    <TableRow>
      <TableCell align="center">
        <Input
          disabled={!editMode}
          placeholder="* Required"
          value={row.lastName}
          required
          id="filled-required"
          onChange={(event) => handleLastNameChange(event.target.value, row.id)}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          disabled={!editMode}
          placeholder="First Name"
          value={row.firstName}
          onChange={(event) =>
            handleFirstNameChange(event.target.value, row.id)
          }
        />
      </TableCell>
      <TableCell align="center">
        <Input
          disabled={!editMode}
          placeholder="Enter phone number"
          value={row.phoneNumber}
          onChange={(event) =>
            handlePhoneNumberChange(event.target.value, row.id)
          }
        />
        {/* <PhoneInput
                              international
                              disabled={!editMode}
                              placeholder="Enter phone number"
                              value={row.phoneNumber}
                              country={"sk"}
                              onChange={(event: any) =>
                                handlePhoneNumberChange(String(event), row.id)
                              }
                            /> */}
      </TableCell>
      <TableCell align="center">
        <Input
          disabled={!editMode}
          placeholder="Email"
          value={row.email}
          onChange={(event) => {
            handleEmailChange(event.target.value, row.id);
          }}
        />
      </TableCell>

      <TableCell align="right">
        <Button
          disabled={editMode}
          startIcon={<EditIcon />}
          onClick={() => {
            setEditMode(true);
          }}
        />
      </TableCell>
      <TableCell align="right">
        <Button
          startIcon={<DeleteIcon />}
          onClick={() => {
            //   handleItemDelete(row.id);
            if (window.confirm(`do you want to delete this contact?${row.id}`))
              handleItemDelete(row.id);
          }}
        />
      </TableCell>
    </TableRow>
  );
};

export default TableRows;
