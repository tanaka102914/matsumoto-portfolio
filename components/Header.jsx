import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={100}
              height={100}
              priority
            />
          </Link>

          {/* socials */}
        </div>
      </div>
    </header>
  );
};

export default Header;
