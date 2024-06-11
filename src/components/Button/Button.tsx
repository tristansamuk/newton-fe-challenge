import "./Button.scss";

interface Props {
  text: string;
  className: string;
}

const Button = ({ text, className }: Props) => {
  return (
    <button className={className}>
      <p className="button-text">{text}</p>
    </button>
  );
};

export default Button;
