interface CardProps {
  children?: JSX.Element | JSX.Element[];
}

export const ServicesListCard = (props: CardProps) => {
  return (
    <div className="col-span-1 rounded-2xl p-7 shadow-md dark:border-2 dark:border-ctaColor-dark md:px-7 md:pb-12 xl:px-10">
      {props.children}
    </div>
  );
};
