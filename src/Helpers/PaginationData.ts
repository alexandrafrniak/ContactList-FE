import { PostType } from "../Types/types";

export interface HeadCell {
  disablePadding: boolean;
  id: keyof PostType;
  label: string;
  numeric: boolean;
}

export const headCells: readonly HeadCell[] = [
  {
    id: "lastName",
    numeric: false,
    disablePadding: true,
    label: "Last Name",
  },
  {
    id: "firstName",
    numeric: false,
    disablePadding: false,
    label: "First Name",
  },
  {
    id: "phoneNumber",
    numeric: false,
    disablePadding: false,
    label: "Phone Number",
  },
  {
    id: "email",
    numeric: false,
    disablePadding: false,
    label: "Email",
  },
];
