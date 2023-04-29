import { Countries } from '../Countries/Countries';
import { Logo } from '../Logo/Logo';
import './Header.scss';

type Props = {};

export const Header = (props: Props) => {
  return (
    <header className="header">
      <nav className="header__nav">
        <Logo />
        <Countries />
      </nav>
    </header>
  );
};
