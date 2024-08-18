"use client";

import { type QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { type QueryParams, type SanityDocument } from "next-sanity";

import BlogPost from "./BlogPost";

const POST_QUERY = `*[_type == 'blog'] | order(publishDate desc)`

export default function BlogPreview({
  initial,
  params
}: {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams
}) {
  const { data } = useQuery<SanityDocument | null>(
    POST_QUERY,
    params,
    { initial }
  );

  return data ? (
    <BlogPost data={data} />
  ) : (
    <div className="bg-red-100">Post not found</div>
  );
}