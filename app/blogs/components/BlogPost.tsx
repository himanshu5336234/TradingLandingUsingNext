import { RichTextComponents } from '@/components/RichTextComponents'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlFor } from 'sanity-cms/lib/image'
import BlogNav from '../Navbar/BlogNav'

export const revalidate = 10;

interface Props {
    data: any;
}


function BlogPost(props: Props):JSX.Element {
    const { data } = props;
  return (
    <article>
          <header>
            <small className="blogAuthorPublishDate">
              By{" "}
              {/* <Link href=""> */}
                <span className="text-black">
                  {data?.author.author.authorName || 'Team Density'}
                </span>
              {/* </Link>{" "} */}
              {data?.tag && (
                <>
                  <span> in</span>
                  {/* <Link href=""> */}
                    <span className="text-black"> {data?.tag.tag.tag}</span>
                  {/* </Link> */}
                </>
              )}{" "}
              -{" "}
              <span className="blogPublishDate">
                {new Date(data?.publishDate).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </small>
            <h1 className="blogTitle">{data?.title}</h1>
            <p className='text-darkGray2 text-[20px] font-light'>{data?.titleDescription}</p>
            {data?.featureImage && (
              <figure className="py-[40px]">
              <Image
                src={urlFor(data.featureImage)}
                alt="blog Image"
                width={720}
                height={405}
              />
              {data?.featureImageCaption && (
                <figcaption className="text-darkGray2">{data.featureImageCaption}</figcaption>
              )}
              
              </figure>
            )}
          </header>
          <section className="blogContent">
            <PortableText
              value={data?.content}
              components={RichTextComponents}
            />
            <button className="blogCTA"><Link href={data?.ctaLink} target="_blank">{data?.ctaText}</Link></button>
          </section>
          </article>
  )
}

export default BlogPost
