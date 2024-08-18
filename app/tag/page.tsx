import Footer from "@/blogs/Footer/Footer";
import BlogNav from "@/blogs/Navbar/BlogNav";
import { tag } from "@/lib/interface";
import React from "react";
import { client } from "sanity-cms/lib/client";

export const revalidate = 10;

async function getData() {
  const query = `*[_type == 'tag'] {
    tag,
      'currentslug': slug.current,
      _id
  }`;

  const data = await client.fetch(query);

  return data;
}

async function page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  
  const data: tag[] = await getData();
  return (
    <div>
      <BlogNav type="tag" totalPages={1} />
      <h1>{data[0].tag}</h1>
      <Footer />
    </div>
  );
}

export default page;
