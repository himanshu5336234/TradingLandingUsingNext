import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Density Exchangwe",
    short_name: "Next.js App",
    description: "Next.js App",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "https://density-uploads-dev.s3.ap-south-1.amazonaws.com/market-assets/Images/density.svg",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
