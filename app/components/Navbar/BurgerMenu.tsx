import React from "react";
import Image from "next/image";
import { getImageUrl } from "@/helpers/GetImagesUrl";

function BurgerMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (n: boolean) => void;
}) {
  return (
    <div
      className="burgerMenu cursor-pointer desktop:hidden desktop:aria-hidden"
      onClick={() => setOpen(!open)}
    >
      {open ? (
        <Image
          src={`${getImageUrl("burgerMenuOpen.svg")}`}
          alt="Close Menu"
          width={30}
          height={30}
        />
      ) : (
        <Image
          src={`${getImageUrl("burgerMenuClose.svg")}`}
          alt="Open Menu"
          width={30}
          height={30}
        />
      )}
    </div>
  );
}

export default BurgerMenu;
