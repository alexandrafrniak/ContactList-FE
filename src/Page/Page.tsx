import { Paper, Stack } from "@mui/material";
import "../mystyle.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  EnhancedTableProps,
  GetPostsData,
  Order,
  PostType,
} from "../Types/types";
import * as React from "react";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";

import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";

// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";

import { visuallyHidden } from "@mui/utils";
import { ChangeEvent } from "react";

import AddPost from "../Components/AddPost";
import TableRows from "../Components/TableRows";
import {
  editPosts,
  createPosts,
  deletePosts,
} from "../Helpers/CommunicationFunctions";

import { generateid, noEmptyRows, stableSort } from "../Helpers/HelpFunctions";

import { Title } from "../theme/customised";
import { headCells } from "../Helpers/PaginationData";
import SubmitButton from "../Components/SubmitButton";
import DiscardButton from "../Components/DiscardButton";

const Page: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof PostType>("lastName");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);

  const fetchPosts = async () => {
    const url = "https://localhost:7218/get-all-posts";
    try {
      const response: GetPostsData = await axios.get(url);
      setPosts(response.data); //
      console.log(posts);
    } catch (err: any) {
      alert(err);
    }
  };

  // AK SI POTREBUJEM VYTVORIT DATA A NEMAM ZAPNUTY BACKEND

  // function setPostsFunction(
  //   id: number,
  //   firstName: string,
  //   lastName: string,
  //   phoneNumber: string,
  //   email: string
  // ): PostType {
  //   return {
  //     id,
  //     firstName,
  //     lastName,
  //     phoneNumber,
  //     email,
  //   };
  // }

  // const rows = [
  //   setPostsFunction(1, "s", "s", "+421955688452", "alexandra@alexadra.sk"),
  // ];

  const handleAdd = () => {
    const newPost = {
      id: generateid(posts),
      firstName: "",
      lastName: "",
      phoneNumber: "+",
      email: "",
    };

    setPosts((current) => [...current, newPost]);
    console.log(posts);
  };

  useEffect(() => {
    fetchPosts();
    // setPosts(rows);
  }, []);

  // pr
  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getIndex(items: PostType[], idToSearch: number): number {
    return posts.findIndex((obj) => obj.id === idToSearch);
  }

  const handleItemDelete = (delItemId: number) => {
    const index = getIndex(posts, delItemId);
    const values = [...posts];
    if (delItemId > -1) {
      deletePosts(delItemId);
    }
    values.splice(index, 1);
    console.log(values);
    setPosts(values);
  };
  // pr
  function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
  ): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
  ) => number {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  const handleFirstNameChange = (newString: string, postId: number): void => {
    setPosts((prevState) => {
      const newState = prevState.map((obj) => {
        if (obj.id === postId) {
          return { ...obj, firstName: newString };
        }

        return obj;
      });

      return newState;
    });
  };
  const handleLastNameChange = (newString: string, postId: number): void => {
    setPosts((prevState) => {
      const newState = prevState.map((obj) => {
        if (obj.id === postId) {
          return { ...obj, lastName: newString };
        }

        return obj;
      });

      return newState;
    });
  };

  const handlePhoneNumberChange = (newString: string, postId: number): void => {
    setPosts((prevState) => {
      const newState = prevState.map((obj) => {
        if (obj.id === postId) {
          return { ...obj, phoneNumber: newString };
        }

        return obj;
      });

      return newState;
    });
  };

  const handleEmailChange = (newString: string, postId: number): void => {
    setPosts((prevState) => {
      const newState = prevState.map((obj) => {
        if (obj.id === postId) {
          return { ...obj, email: newString };
        }

        return obj;
      });

      return newState;
    });
  };
  // pr
  function EnhancedTableHead(props: EnhancedTableProps) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler =
      (property: keyof PostType) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
      };

    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align="center"
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                style={{ fontSize: "14pt" }}
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  // pr
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof PostType
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  // pr
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  // pr
  const changeEditMode = (editState: boolean): void => {
    setEditMode(!editMode);
  };

  // pr
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - posts.length) : 0;

  const saveChanges = (): void => {
    posts.map((post, i) => {
      post.id <= 0 ? createPosts(post) : editPosts(post);
    });
  };
  // pr
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const returnStateObj = (): PostType[] => {
    return editMode ? posts : stableSort(posts, getComparator(order, orderBy));
  };

  return (
    <form>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Title>Your Contacts</Title>
        <Paper
          sx={{
            bgcolor: "#e9e6ff",
            minWidth: "90%",
            height: "90%",
            align: "center",
            mx: 3,
            mb: 3,
          }}
        >
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={posts.length}
                onSelectAllClick={function (
                  event: ChangeEvent<HTMLInputElement>
                ): void {
                  throw new Error("Function not implemented.");
                }}
              />
              <TableBody>
                {returnStateObj()
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRows
                        editMode={editMode}
                        row={row}
                        handleItemDelete={handleItemDelete}
                        handleLastNameChange={handleLastNameChange}
                        handleFirstNameChange={handleFirstNameChange}
                        handlePhoneNumberChange={handlePhoneNumberChange}
                        handleEmailChange={handleEmailChange}
                        setEditMode={setEditMode}
                      />
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            component="div"
            count={posts.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <Box sx={{ px: 4, py: 1 }}>
            <AddPost
              handleAdd={handleAdd}
              editMode={editMode}
              changeEditMode={changeEditMode}
            />
          </Box>
        </Paper>

        <Box sx={{ px: 4, py: 1 }}>
          <Stack direction="row" spacing={2}>
            {editMode ? (
              <SubmitButton
                noEmptyRows={noEmptyRows}
                setEditMode={setEditMode}
                saveChanges={saveChanges}
                posts={posts}
              />
            ) : null}
            {editMode ? <DiscardButton /> : null}
          </Stack>
        </Box>
      </Box>
    </form>
  );
};

export default Page;
