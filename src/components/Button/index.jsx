import "./styles.css";
import P from "prop-types";

export const Button = ({ text, actionFn, disabled }) => (
  <button disabled={disabled} className="button" onClick={actionFn}>
    {text}
  </button>
);

Button.propTypes = {
  text: P.string.isRequired,
  actionFn: P.func.isRequired,
  disabled: P.bool,
};
