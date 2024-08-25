import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("<Button />", () => {
  it("should render the button with the text", () => {
    const fn = jest.fn();
    render(<Button text="Load More" disabled={false} actionFn={fn} />);
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it("should be disabled when disabled is true", () => {
    const fn = jest.fn();
    render(<Button text="Load More" disabled={true} actionFn={fn} />);
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeDisabled();
  });

  it("should be enabled when disabled is false", () => {
    const fn = jest.fn();
    render(<Button text="Load More" disabled={false} actionFn={fn} />);
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeEnabled();
  });

  it("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Load More" disabled={false} actionFn={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
