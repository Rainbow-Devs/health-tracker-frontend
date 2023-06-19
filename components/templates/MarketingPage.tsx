export const MarketingPage = ({ children }: { children?: React.ReactNode }) => {
  return (
    <main className="flex flex-col justify-between">
      <div className="container min-h-screen max-w-screen-lg p-4">
        {children}
      </div>
    </main>
  );
};
