import { getImageUrl } from "@/helpers/GetImagesUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "sanity-cms/lib/image";

export const revalidate = 10;

interface Props {
  post: any;
  slug: string;
}

function BlogCard(props: Props): JSX.Element {
  const { post, slug } = props;
  return (
    <article key={slug} className="blogCard">
      <div>
        <figure>
          <Image
            src={
              post.featureImage
                ? urlFor(post.featureImage)
                : `${getImageUrl("defaultBlogImage.jpg")}`
            }
            alt="blog Image"
            width={1000}
            height={374}
            className="max-h-[200px] tablet:max-h-[250px] desktop:min-h-[200px] desktop:max-h-[200px]"
          />
        </figure>
        <div className="postWrapper">
          {post?.tag && <p className="postTag">{post?.tag?.tag?.tag}</p>}
          {post?.currenttag?.tag && (
            <p className="postTag">{post?.currenttag?.tag}</p>
          )}

          <h2 className="postTitle">{post.title}</h2>
          <p className="postSummary">{post.metaDescription}</p>
        </div>
      </div>
      <section className="footer">
        <Link href={slug ? `/blogs/${slug}` : ""} className="postFooter">
          <p>Read More</p>
          <figure className="blogCardLogo">
            <Image
              src={`${getImageUrl("black-density-logo.png")}`}
              alt="Density logo"
              height={28}
              width={28}
            />
          </figure>
        </Link>
      </section>
    </article>
  );
}

export default BlogCard;
