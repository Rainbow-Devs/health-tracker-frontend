import { MarketingPage } from "@templates/MarketingPage";
import { MarketingHero } from "@organisms/MarketingHero";
import { ServicesList } from "@organisms/ServicesList";

export default function Home() {
  return (
    <MarketingPage>
      <MarketingHero />
      <ServicesList />
    </MarketingPage>
  );
}
