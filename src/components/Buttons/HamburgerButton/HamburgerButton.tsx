import hamburgerIcon from '../../../assets/images/ui/hamburger.svg';
import './HamburgerButton.scss';

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const HamburgerButton = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className="hamburger-btn">
      <img
        src={hamburgerIcon}
        className="hamburger-btn__icon"
        alt="hamburger nav"
      />
    </button>
  );
};
