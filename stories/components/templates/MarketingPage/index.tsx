import { MarketingHero } from "@templates/MarketingHero";

export const MarketingPage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MarketingHero />
      <section data-testid="detail-1" id="detail-1">
        <div className="container"></div>
      </section>
    </main>
  );
};
