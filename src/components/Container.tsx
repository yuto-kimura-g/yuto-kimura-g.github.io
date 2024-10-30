export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] w-[80vw] lg:w-[40vw] mx-auto">
      {children}
    </div>
  );
};
