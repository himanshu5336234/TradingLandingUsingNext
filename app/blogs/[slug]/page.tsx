import { client } from "../../../sanity-cms/lib/client";
import React from "react";
import BlogNav from "../Navbar/BlogNav";
import Footer from "../Footer/Footer";
import BlogPost from "../components/BlogPost";
import BlogNavigation from "../components/BlogNavigation";
import BlogCard from "../components/BlogCard";

export const revalidate = 10;

type Props = {
  params: {
    slug: string;
  };
};


async function Page({ params: { slug } }: Props) {
  const query = `*[_type == 'blog' && slug.current == $slug][0] {
        "current": {
              ...,
            'featureImageCaption': featureImage.caption,
            author {
              author->
            },
            tag {
              tag->
            },
            'ctaText': cta.buttonText,
            'ctaLink': cta.buttonLink
        },
        "previous": *[_type == 'blog' && ^.publishDate > publishDate] |order(publishDate desc)[0] {
          "slug": slug.current,
          title
        },
        "next": *[_type == 'blog' && ^.publishDate < publishDate] |order(publishDate desc)[0] {
          "slug": slug.current,
          title
        },
        "related":*[_type == 'blog' && _id != ^._id ] | order(_createdAt desc) [0..3] {
          _id,
          title,
          "slug": slug.current,
          featureImage,
          'featureImageCaption': featureImage.caption,
        }
    }`;

  const data = await client.fetch(query, { slug });
  const current = data.current;
  const previous = data.previous;
  const next = data.next;
  const related = data.related;

  return (
    <main>
      <BlogNav totalPages={1} type="blog" />
      <div className="py-[30px]">
        <div className="mt-16 w-[80%] max-w-[720px] mx-auto">
          <BlogPost data={current ?? null} />

          {/* Navigation */}
          <BlogNavigation previous={previous} next={next} />
        </div>
        <article className="blogRecommendations">
          <section className="w-[95%] tablet:w-[90%] desktop:w-[85%] mx-auto">
            <h3>
              <span className="blogRecommendations-header">
                You might also like...
              </span>
            </h3>

            {/* Blog Recommendations */}
            <section className="blogRecommendations-blogs">
              {/* Here comes the blog Recommendations */}
              {related.map((post: any) => {
                const slug = post.slug;
                return <BlogCard key={slug} post={post} slug={slug} />;
              })}
            </section>
          </section>
        </article>
        <Footer />
      </div>
    </main>
  );
}

export default Page;
