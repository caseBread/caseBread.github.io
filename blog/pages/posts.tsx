import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import content from "../posts/temp_post.md";

const Posts = () => {
  return (
    <main>
      <ReactMarkdown className="prose lg:prose-xl">{content}</ReactMarkdown>
    </main>
  );
};
export default Posts;
