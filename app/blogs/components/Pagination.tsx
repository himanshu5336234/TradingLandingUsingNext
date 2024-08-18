"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { blogCard } from "@/lib/interface";

interface Props {
  totalPages: number
  data: blogCard[]
  setPosts: Dispatch<SetStateAction<blogCard[]>>
  posts: blogCard[]
  setButtonClicked: Dispatch<SetStateAction<number>>
  page: number
}

function Pagination(props: Props) {
  const { totalPages, setPosts, data, posts, setButtonClicked, page } = props;

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const pathname = usePathname();
  const { replace } = useRouter();
  const router = useRouter();
  const searchParams = useSearchParams();
  // const currentPage = Number(searchParams.get("page")) || 1;
  // let newPage = currentPage;

  useEffect(() => {
    if (page >= totalPages) {
      setButtonDisabled(false);
    }
    else {
      setButtonDisabled(true);
    }
  }, [page, totalPages])

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <button
      className={["absolute bg-black text-white bottom-10 left-1/2 -translate-x-1/2 rounded-md px-4 py-3 tracking-wide hover:bg-lightGray6 transition-all cursor-pointer disabled:cursor-not-allowed text-[13px] tablet:text-[16px]", buttonDisabled && "!bg-lightGray3"].filter(Boolean).join(" ")}
      onClick={() => {
        setButtonClicked((prev)=> prev+1)
        if (!buttonDisabled) {
          router.push(createPageURL(1));
        }
        else {
          router.push(createPageURL(page));
        }
      }}
    >
      {buttonDisabled ? 'Loading more posts ...' : 'Back to Top'}
      
    </button>
  );
}

export default Pagination;
