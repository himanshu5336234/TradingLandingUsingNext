import Footer from "@/blogs/Footer/Footer";
import BlogNav from "@/blogs/Navbar/BlogNav";
import BlogCard from "@/blogs/components/BlogCard";
import React from "react";
import { client } from "sanity-cms/lib/client";

export const revalidate = 10;

async function getPostsByTag(tag: string) {
  const query = `
  *[_type == "blog" && references(*[_type == "tag" && slug.current == "${tag}"]._id)] | order(publishDate desc){
    title,
    metaDescription,
    "blogSlug": slug.current,
    featureImage,
    'currenttag': tag.tag-> {'currentslug': slug.current, tag, desc}
  }
  `;

  const posts = await client.fetch(query);
  return posts;
}

interface Params {
  params: {
    slug: string;
  };
}

async function Page({ params }: Params) {
  const posts = await getPostsByTag(params.slug);

  return (
    <main className="w-dvw bg-blogPage">
        <BlogNav type="tag" totalPages={1} />
        <header className="px-9 py-[30px] w-full mx-auto desktop:w-[90%] maxScreenSize">
        <h1 className="text-[24px] font-bold tracking-wide leading-10">{posts[0]?.currenttag?.tag}</h1>
        <p className="text-[18px] font-light desktop:w-[60%]">{posts[0]?.currenttag?.desc}</p>
        </header>
        <section className="blogCardsContainer min-h-[600px] relative maxScreenSize">
        
      {posts?.length > 0 ?
        posts?.map((post: any) => {
          return (
            <>
              
              <BlogCard key={post.blogSlug} post={post} slug={post.blogSlug} />
            </>
          );
        }): <h1 className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 text-[20px] text-center">No posts to show in this section</h1>}
        </section>
        
        <Footer />
    </main>
  );
}

export default Page;
