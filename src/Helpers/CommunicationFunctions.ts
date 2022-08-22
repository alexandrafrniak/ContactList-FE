import axios from "axios";
import { GetPostsData, PostType } from "../Types/types";

export const deletePosts = async (deleted: number): Promise<void> => {
  try {
    const url = `https://localhost:7218/delete-post-by-id/${deleted}`;

    const response: GetPostsData = await axios.delete(url);
    console.log(response);
  } catch (err: any) {
    alert(err);
  }
};

export const createPosts = async (newItem: PostType): Promise<void> => {
  const url = "https://localhost:7218/create-post";
  try {
    const article = {
      FirstName: newItem.firstName,
      LastName: newItem.lastName,
      PhoneNumber: newItem.phoneNumber,
      Email: newItem.email,
    };
    const response: GetPostsData = await axios.post(url, article);
    console.log(response);
  } catch (err: any) {
    alert(err);
  }
};

export const editPosts = async (editedItem: PostType): Promise<void> => {
  const url = "https://localhost:7218/update-post";

  try {
    const article = {
      Id: editedItem.id,
      FirstName: editedItem.firstName,
      LastName: editedItem.lastName,
      PhoneNumber: editedItem.phoneNumber,
      Email: editedItem.email,
    };

    const response: GetPostsData = await axios.put(url, article);
    console.log(response);
  } catch (err: any) {
    alert(err);
  }
};
