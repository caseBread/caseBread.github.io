import { useEffect, useState } from "react";
import { AiFillCaretUp } from "react-icons/ai";

const ToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const handleFollow = () => {
    setShowTopBtn(window.pageYOffset > 57);
  };

  useEffect(() => {
    const scrollWatch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    scrollWatch();
    return () => window.removeEventListener("scroll", handleFollow);
  });

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // TODO : Top button 나타날때 위에서 나타나도록 / 사라질때도 아래로 사라지기
  return (
    <>
      <button
        className={`fixed  right-8 border-2 p-4 rounded-full bg-white hover:bg-secondary hover:border-secondary z-50 duration-300 ${
          showTopBtn ? "bottom-8" : "-bottom-14"
        }`}
        onClick={handleTop}
      >
        <AiFillCaretUp />
      </button>
    </>
  );
};
export default ToTop;
