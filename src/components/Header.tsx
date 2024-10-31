import Link from 'next/link';

export const Header = () => {
  return (
    <header className="flex h-[10vh] items-center bg-theme-light-bg bg-opacity-50">
      <nav className="mx-auto flex w-[90vw] items-center">
        <Link href={'/'} className="flex items-center">
          <img src="/y.png" alt="icon" className="h-[8vh]" />
          <span className="font-logo text-2xl">yuto::website</span>
        </Link>
      </nav>
    </header>
  );
};
