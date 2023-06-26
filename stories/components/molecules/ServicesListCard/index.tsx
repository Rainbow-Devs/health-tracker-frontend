export const ServicesListCard: React.FC<React.PropsWithChildren> = ({
  children
}) => (
  <div className="col-span-10 col-start-2 rounded-2xl p-7 shadow-md dark:border-2 dark:border-ctaColor-dark md:col-span-4 md:col-start-auto md:px-7 md:pb-12">
    {children}
  </div>
);
