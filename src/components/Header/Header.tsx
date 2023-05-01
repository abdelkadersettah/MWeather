import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import './Header.scss';

type Props = {};

export const Header = (props: Props) => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
    </header>
  );
};
