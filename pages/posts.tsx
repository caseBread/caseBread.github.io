import { allPosts, Post } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";
import { useMemo } from "react";

const Posts = ({ posts }: { posts: Post }) => {
  console.log(posts);
  return <main>a13{JSON.stringify(posts)}</main>;
};

export const getStaticProps = async () => {
  const posts = allPosts.sort((a: any, b: any) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return { props: { posts } };
};

export default Posts;
