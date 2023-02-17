import fs from "fs";
import { join } from "path";

const POSTS_PATH = join(process.cwd(), "_posts");

export const getStaticPaths = async () => {
  const paths = fs
    .readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.md?$/, ""))
    .map((slug) => ({
      params: {
        slug,
      },
    }));

  return {
    paths,
    fallback: false,
  };
};
