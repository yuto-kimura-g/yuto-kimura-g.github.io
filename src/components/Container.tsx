export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto flex min-h-[80vh] w-[80vw] items-center justify-center py-20 lg:w-[40vw]">
      {children}
    </div>
  );
};
