import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../sanity-cms/lib/image";
import Youtube from "@/blogs/components/Youtube";
import getYouTubeID from "get-youtube-id";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <Image
          src={urlFor(value)}
          alt="Blog Content Images"
          width={800}
          height={300}
          className="my-8"
        />
      );
    },
    youtube: ({ value }: any) => {
      const id = getYouTubeID(value.url);
      return <Youtube id={id} />;
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc hover:text-black">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="mt-[43.6px] font-bold text-[28px]">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="mt-[43.6px] font-bold text-[14px]">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="mt-[43.6px] font-bold text-[12px]">{children}</h4>
    ),
    p: ({ children }: any) => <p className="font-light mb-6">{children}</p>,

    blockquote: ({ children }: any) => (
      <blockquote className="border-l-gradient2 border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;

      return (
        <Link
          href={value?.href}
          target={target}
          className="text-[blue] font-normal hover:text-darkGray2"
        >
          {children}
        </Link>
      );
    },
  },
};
