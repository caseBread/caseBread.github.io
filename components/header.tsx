import Link from "next/link";
import { BsFillSunFill } from "react-icons/bs";
const Header = () => {
  return (
    <header className="sticky font-mono">
      <div className="flex gap-4 justify-around py-4 border-b  ">
        <Link href="/">caseBread's devlog</Link>
        <div className="flex gap-8 items-center">
          <BsFillSunFill />
          <Link href="/about" className="hover:text-sky-500" type="button">
            about
          </Link>
          <Link href="/posts" className="hover:text-sky-500" type="button">
            posts
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
