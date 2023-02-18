import Head from "next/head";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { convertDate } from "@/lib/convertDate";
import Link from "next/link";

export async function getStaticPaths() {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const post = allPosts.find((post) => post._id === params.slug);
  return {
    props: {
      post,
    },
  };
}

const PostLayout = ({ post }: { post: Post }) => {
  return (
    <main>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="py-8">
        <div className="mb-12 px-4">
          <h1 className="text-5xl font-extrabold mb-2">{post.title}</h1>
          <div className="flex gap-4 items-center">
            <time dateTime={post.date} className=" text-gray-600">
              {convertDate(post.date)}
            </time>
            <span>·</span>
            {post.tags.map((tag, idx) => (
              <Link
                href=""
                className="text-primary mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                key={tag}
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
        <div
          className="prose break-words"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
    </main>
  );
};

export default PostLayout;
