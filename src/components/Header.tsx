import Link from 'next/link';

export const Header = () => {
  return (
    <header className="flex items-center h-[10vh] bg-theme-light-bg">
      <nav className="flex items-center w-[90vw] mx-auto">
        <Link href={'/'} className="flex items-center">
          <img src="/y.png" alt="icon" className="h-[8vh]" />
          <span className="text-2xl font-logo">yuto::website</span>
        </Link>
      </nav>
    </header>
  );
};
