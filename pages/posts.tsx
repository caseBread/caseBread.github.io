import { allPosts, Post } from "@/.contentlayer/generated";
import { convertDate } from "@/lib/convertDate";
import { convertToPlainText } from "@/lib/convertPlainText";
import { compareDesc } from "date-fns";
import Link from "next/link";

export const getStaticProps = async () => {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return { props: { posts } };
};

const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <main>
      <ul>
        {posts.map((post, idx) => (
          <li className="border-b-2 py-8" key={post._id}>
            <article className="flex flex-col gap-3">
              <dl>
                <dt className="sr-only">published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime={post.date}>{convertDate(post.date)}</time>
                </dd>
              </dl>

              <div className="">
                <h2 className="py-1 text-2xl font-bold leading-8 tracking-tight">
                  <Link
                    href={`/post/${post._id}`}
                    className="text-gray-900 dark:text-gray-100"
                  >
                    {post.title}
                  </Link>
                </h2>
                <div className="flex gap-2">
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
              <div className="text-sm prose max-w-none text-gray-500 dark:text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">
                {convertToPlainText(post.body.html)}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Posts;
