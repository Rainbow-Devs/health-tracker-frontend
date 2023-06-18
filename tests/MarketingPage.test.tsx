import { MarketingPage } from "@templates/MarketingPage";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("MarketingPage", () => {
  it("renders the MarketingHero component", () => {
    render(<MarketingPage />);
    const marketingHero = screen.getByTestId("hero");
    expect(marketingHero).toBeInTheDocument();
  });
  it("renders the detail section with the correct ID", () => {
    render(<MarketingPage />);
    const detailSection = screen.getByTestId("detail-1");

    expect(detailSection).toBeInTheDocument();
  });
});
