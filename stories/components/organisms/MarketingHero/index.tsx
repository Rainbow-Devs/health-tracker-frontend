import { GenericButton } from "@atoms/GenericButton";
import Link from "next/link";

export const MarketingHero: React.FC = () => {
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-12">
      <div className="col-span-5 grid grid-cols-6 gap-6 py-16">
        <div className="col-span-4 flex flex-row justify-center gap-6 lg:col-span-3 lg:flex-col">
          <div className="h-60 w-full border-2 border-fuchsia-800"></div>
          <div className="h-60 w-full border-2 border-fuchsia-800"></div>
        </div>
        <div className="col-span-2 flex flex-col justify-center lg:col-span-3 lg:col-start-4">
          <div className="h-72 w-full border-2 border-fuchsia-800"></div>
        </div>
      </div>
      <div className="col-span-6 col-start-7 flex flex-col justify-center p-4">
        <div className="flex flex-col space-y-3">
          <header>
            <h2 className="text-2xl font-bold">
              Taking care of yourself is hard. We make it easy.
            </h2>
          </header>
          <p>
            Say goodbye to a million different fitness apps and hello to
            WellPath. Keep track of your physical and mental health all in one
            place.
          </p>
          <p>
            Built by <Link href="/about-rainbow-devs">the Rainbow Devs</Link>.
          </p>
          <GenericButton href="/login" className="w-24">
            Sign In
          </GenericButton>
        </div>
      </div>
    </section>
  );
};
