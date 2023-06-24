import { MarketingPage } from "@templates/MarketingPage";
import { MarketingHero } from "@organisms/MarketingHero";
import { ServiceList } from "@organisms/ServiceList";

export default function Home() {
  return (
    <MarketingPage>
      <MarketingHero />
      <ServiceList />
    </MarketingPage>
  );
}
