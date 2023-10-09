import { Link } from "gatsby";
import React from "react";

const HeaderMenus = () => {
  return (
    <div className="flex gap-8">
      <button>
        <img src="/icon/ic-darkmode-light.svg" alt="다크모드-전환" />
      </button>
      <Link to="/about">about</Link>
      {/* <Link to="/posts">posts</Link> */}
    </div>
  );
};

export default HeaderMenus;
