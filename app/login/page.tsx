import { LoginPrompt } from "@molecules/LoginPrompt";
import { MarketingPage } from "@templates/MarketingPage";

export default function Page() {
  return (
    <MarketingPage>
      <header>
        <h1 className="mb-4 text-lg font-bold">Get Started</h1>
      </header>
      <LoginPrompt />
    </MarketingPage>
  );
}
