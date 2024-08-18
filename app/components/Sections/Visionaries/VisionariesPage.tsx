import React from "react";
import VisionariesCard from "./VisionariesCard";
import { getImageUrl } from "@/helpers/GetImagesUrl";

function VisionariesPage() {
  return (
    <article className="maxScreenSize py-[8.75rem] flex flex-col items-center gap-[5.125rem]">
      <h2 className="heading">
        Meet the{" "}
        <span className="text-gradient5">
          Visionaries <br />{" "}
        </span>
        behind Density.
      </h2>
      <div className="cardContainer grid grid-cols-1 desktop:grid-cols-3 mx-auto gap-4">
        <VisionariesCard
          image={`${getImageUrl("visionaries/Aakash.svg")}`}
          alt="Aakash Neeraj Mittal"
          firstName="Aakash Neeraj"
          lastName="Mittal"
          status="CEO, Density"
          url="https://www.linkedin.com/in/aakashneerajmittal/"
        />
        <VisionariesCard
          image={`${getImageUrl("visionaries/Bhupendra.svg")}`}
          alt="Bhupendra Bule"
          firstName="Bhupendra"
          lastName="Bule"
          status="CTO Density"
          url="https://www.linkedin.com/in/bhupendra-bule/"
        />
        <VisionariesCard
          image={`${getImageUrl("visionaries/Deepak.svg")}`}
          alt="Deepak Vasman"
          firstName="Deepak"
          lastName="Vasman"
          status="CBO, Density"
          url="https://www.linkedin.com/in/deepak-vasman-b666b236/"
        />
      </div>
    </article>
  );
}

export default VisionariesPage;
