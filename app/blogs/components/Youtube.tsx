import React from "react";

interface Props {
  id: any;
}

function Youtube(props: Props) {
  const { id } = props;
  return (
    <iframe
      width="560"
      height="400"
      src={`https://www.youtube.com/embed/${id}?si=PQ5QttS2SaQL5xhC`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      className="w-full mx-auto my-10"
    ></iframe>
  );
}

export default Youtube;
