import { render, screen } from "@testing-library/react";
import { PostCard } from ".";

const mock = {
  title: "title 1",
  body: "title 1 1",
  cover: "img/img.png",
};

describe("<PostCard />", () => {
  it("should render PostCard correctly", () => {
    render(<PostCard {...mock} />);
    expect(screen.getByAltText(/title 1/i)).toHaveAttribute("src", "img/img.png");
    expect(screen.getByRole("heading", { name: "title 1" })).toBeInTheDocument();
    expect(screen.getByText("title 1 1")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(<PostCard {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
