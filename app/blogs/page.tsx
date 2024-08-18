import React, { useState } from "react";
import BlogNav from "./Navbar/BlogNav";
import { client } from "../../sanity-cms/lib/client";
import { blogCard } from "@/lib/interface";
import Footer from "./Footer/Footer";
import BlogCard from "./components/BlogCard";
import getSearchData from "@/helpers/GetSearch";
import getTotalPages from "@/helpers/GetTotalPages";
import Pagination from "./components/Pagination";
import BlogList from "./components/BlogList";
import { fetchBlogs } from "@/helpers/action";

export const revalidate = 10;

async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await getTotalPages(query);
  const postLimit = 8;

  // const data = await getSearchData(query, currentPage, postLimit);
  const data = await fetchBlogs(query, currentPage, postLimit)

  return (
    <main className="w-dvw bg-blogPage">
      <BlogNav totalPages={totalPages} type="blog" />
      <div key={Math.random()} className="relative">
        <BlogList initialData={data} totalPages={totalPages} query={query} pageSize={postLimit} />
      </div>
      
      <Footer />
    </main>
  );
}

export default Page;
