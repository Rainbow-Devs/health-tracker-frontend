import { render, screen } from "@testing-library/react";

import { MarketingPage } from "@templates/MarketingPage";

describe("MarketingPage", () => {
  it("renders expected components", async () => {
    render(<MarketingPage />);

    const marketingHero = await screen.getByTestId("hero");
    const detailSection = await screen.getByTestId("detail-1");

    expect(marketingHero).toBeInTheDocument();
    expect(detailSection).toBeInTheDocument();
  });
});
