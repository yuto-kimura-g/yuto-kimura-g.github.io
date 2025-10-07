export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex h-[10vh] w-full items-center justify-center bg-theme-light-bg bg-opacity-50">
      <div className="space-x-1">
        <span>&copy; {year}</span>
        <a href="https://github.com/yuto-kimura-g/">yuto-kimura-g.</a>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
};
