"use client";

import { getImageUrl } from "@/helpers/GetImagesUrl";
import Image from "next/image";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [value, setValue] = useState("");

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 150)

  return (
    <article className="bg-white rounded-lg border border-black/10 h-[45px] w-full flex-grow flex items-center gap-10 justify-between px-4">
      <input
        type="text"
        id="inputId"
        placeholder="Search blog posts.."
        value={[value || "" || searchParams && searchParams.get('query')?.toString()].filter(Boolean).join(" ") || ""}
        onChange={(e) => {
          setValue(e.target.value)
          handleSearch(e.target.value)
        }}
        className="flex-grow h-full w-full outline-none tracking-wide placeholder:text-black/60 placeholder:text-[14px]"
      />
      <Image src={`${getImageUrl("search-icon.svg")}`} alt="Search Icon" height={20} width={20} />
    </article>
  );
}

export default SearchInput;
