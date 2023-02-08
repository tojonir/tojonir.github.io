import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-[30px]">Page not found</h1>
      <p>
        Sorry 😔, we couldn't find what you were looking for.
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
