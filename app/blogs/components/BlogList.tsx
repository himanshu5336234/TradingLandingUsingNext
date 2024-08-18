"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { blogCard } from "@/lib/interface";
import Pagination from "./Pagination";
import { useSearchParams } from "next/navigation";
import { useInView } from "react-intersection-observer";
import { fetchBlogs } from "@/helpers/action";

interface Props {
  initialData: blogCard[];
  totalPages: number;
  query: string;
  pageSize: number;
}

function BlogList(props: Props) {
  const { initialData, totalPages, query, pageSize } = props;
  const [posts, setPosts] = useState(initialData);
  const [page, setPage] = useState(1);
  const [buttonClicked, setButtonClicked] = useState(0);
  const searchParams = useSearchParams();
  const [ref, inView] = useInView();

  async function loadMorePosts() {
    const next = page + 1;
    const blogs = await fetchBlogs(query, next, pageSize);
    if (posts?.length) {
      setPage(next);
      setPosts((prev: blogCard[] | undefined) => [
        ...(prev?.length ? prev : []),
        ...blogs,
      ]);
    }
  }

  useEffect(() => {
    if (inView) {
      loadMorePosts();
    }
  }, [inView]);

  //   useEffect(() => {
  //       if(buttonClicked > 0) {
  //         loadMorePosts();
  //       }
  //   }, [buttonClicked])

  return (
    <section className="blogCardsContainer maxScreenSize">
      {posts.map((post: any) => {
        const slug = post.currentSlug;
        return <BlogCard key={slug} post={post} slug={slug} />;
      })}

      {posts.length > 0 ? (
        <div ref={ref}>
          <Pagination
            page={page}
            totalPages={totalPages}
            setPosts={setPosts}
            data={initialData}
            posts={posts}
            setButtonClicked={setButtonClicked}
          />
        </div>
      ) : <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tablet:text-[1.2rem] text-center">No posts to show</h1>}
    </section>
  );
}

export default BlogList;
