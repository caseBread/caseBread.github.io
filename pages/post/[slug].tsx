import { getPostData } from "@/utils/getPostData";
import { useMemo } from "react";

interface Props {
  title: string;
}

const Post = ({ title }: Props) => {
  const postData = useMemo(() => {
    return getPostData(title);
  }, [title]);

  return <div>{JSON.stringify(postData)}</div>;
};
export default Post;
