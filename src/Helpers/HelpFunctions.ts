import { PostType } from "../Types/types";

export const generateid = (posts: PostType[]): number => {
  const values = posts;
  const min = Math.min(...values.map((o) => o.id), 0);
  return min < 0 ? min - 1 : -1;
};

export function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export const noEmptyRows = (posts: PostType[]): boolean => {
  let filled = true;
  posts.map((post, i) => {
    if (post.lastName === "") {
      filled = false;
    }
  });
  return filled;
};
