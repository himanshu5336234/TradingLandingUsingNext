import { client } from "sanity-cms/lib/client";

async function getTotalPages(param: string) {
  let query;
  if (param) {
    query = `count(*[[title, slug.current] match "${param}*" || content[].children[].text match "${param}*"] | order(publishDate desc) {
      title,
        'currentSlug': slug.current,
        tag {
        tag-> {
          tag
        }
        },
        featureImage,
        metaDescription,
  "content":content[].children[].text
    })`;
  } else {
    query = `count(*[_type == 'blog'] | order(publishDate desc) {
      title,
        'currentSlug': slug.current,
        featureImage,
        metaDescription,
        tag {
        tag-> {
          tag
        }
        }
    })`;
  }

  const data = await client.fetch(query);

  return Math.ceil(data / 4);
}

export default getTotalPages;
