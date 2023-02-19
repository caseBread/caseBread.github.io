import { AiFillCaretUp } from "react-icons/ai";

const ToTop = () => {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="fixed bottom-8 right-8 border-2 p-4 rounded-full bg-white hover:bg-secondary hover:border-secondary z-50"
      onClick={handleTop}
    >
      <AiFillCaretUp />
    </button>
  );
};
export default ToTop;
