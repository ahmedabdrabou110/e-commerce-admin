import Container from "@/utils/Container";
import Link from "next/link";
import { Redressed } from "next/font/google";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const Navbar = () => {
  return (
    <div className="w-full sticky top-0 bg-slate-300 z-30 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between px-4 md:gap-0">
            <Link
              href="/"
              className={`${redressed.className} font-bold text-2xl`}
            >
              Almasa
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md:gap-12">
              <div>CartCount</div>
              <div>UserMenu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;