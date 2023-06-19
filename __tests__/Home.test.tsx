import { render, screen } from "@testing-library/react";

import { default as Home } from "@app/page";

describe("Home", () => {
  it("renders expected components", async () => {
    render(<Home />);

    const marketingHero = await screen.findByRole("heading", {
      name: "Getting Started"
    });

    expect(marketingHero).toBeInTheDocument();
  });
});
