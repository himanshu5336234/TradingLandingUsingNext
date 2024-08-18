import { client } from "sanity-cms/lib/client";

async function getSearchData(param: string, page: number, pageSize: number) {
  let query;
  if (param) {
    query = `*[([title, slug.current] match "${param}*" || content[].children[].text match "${param}*") && defined(publishDate) && defined(title)] | order(publishDate desc) [${
      (page - 1) * pageSize
    }...${page * pageSize}] {
      _id,
      publishDate,
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
    }`;
  } else {
    query = `*[_type == 'blog'] | order(publishDate desc) [${
      (page - 1) * pageSize
    }...${page * pageSize}]  {
      _id,
      publishDate,
      title,
        'currentSlug': slug.current,
        featureImage,
        metaDescription,
        tag {
        tag-> {
          tag
        }
        }
    }`;
  }

  const data = await client.fetch(query);

  return data;
}

export default getSearchData;
