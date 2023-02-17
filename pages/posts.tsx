import { getStaticPaths } from "@/utils/getStaticPaths";
import { useMemo } from "react";

const Posts = () => {
  const staticPaths = useMemo(() => {
    return getStaticPaths();
  }, []);
  return <main>{JSON.stringify(staticPaths)}</main>;
};
export default Posts;
