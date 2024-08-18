import Link from "next/link";
import React from "react";

interface Props {
  previous: any;
  next: any;
}

function BlogNavigation(props: Props) {
  const { previous, next } = props;

  return (
    <section className="blogNavigation">
      {/* Previous */}
      {previous ? (
        <Link className="navigationItem" href={previous.slug ?? ""}>
          <div className="navigationLabel navigation-previous">Previous</div>
          <h4 className="navigationTitle">{previous.title}</h4>
        </Link>
      ) : <div className="navigationItem"></div>}

      {/* Next */}
      {next && (
        <Link className="navigationItem !text-right" href={next.slug ?? ""}>
          <div className="navigationLabel navigation-next">Next</div>
          <h4 className="navigationTitle !text-right">{next.title}</h4>
        </Link>
      )}
    </section>
  );
}

export default BlogNavigation;
