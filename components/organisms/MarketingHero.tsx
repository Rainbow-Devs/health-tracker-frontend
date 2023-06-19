import { GenericButton } from "@atoms/GenericButton";
import Link from "next/link";

export const MarketingHero: React.FC = () => {
  return (
    <section className="flex flex-col space-y-3">
      <header>
        <h2 className="text-lg font-bold">
          Taking care of yourself is hard. We make it easy.
        </h2>
      </header>
      <p>
        Say goodbye to a million different fitness apps and hello to WellPath.
        Keep track of your physical and mental health all in one place.
      </p>
      <p>
        Built by <Link href="/about-rainbow-devs">the Rainbow Devs</Link>.
      </p>
      <GenericButton href="/login" className="w-24">
        Sign In
      </GenericButton>
    </section>
  );
};
