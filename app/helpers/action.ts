"use server";

import getSearchData from "./GetSearch";

export async function fetchBlogs(
  query: string,
  page: number,
  pageSize: number
) {

  const  data = await getSearchData(query, page, pageSize);

  return data;
}
