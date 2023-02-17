import { readFileSync } from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "rehype-stringify";

export async function getPostData(title: string) {
  const fullPath = path.join("../posts/", `${title}.md`);
  const fileContents = readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    title,
    contentHtml,
    ...matterResult.data,
  };
}
