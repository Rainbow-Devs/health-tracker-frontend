import { GenericButton } from "@atoms/GenericButton";
import Link from "next/link";

import { HeroImage } from "@images/HeroImage";
import Image from "next/image";

export const MarketingHero: React.FC = () => {
  return (
    <section className="grid grid-cols-12 md:py-10">
      <div className="col-span-12 p-4 md:col-span-6">
        <div className="overflow-hidden rounded-lg md:h-[32rem]">
          <Image
            src={HeroImage}
            alt="Six people of different races and genders running in place in a parking lot on a sunny day."
            placeholder="blur"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="col-span-12 flex flex-col justify-center p-4 md:col-span-6 md:col-start-7">
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
