import { useRef, useState } from 'react';
import { useOnClickOutside } from '../../hooks/useClickOutside';
import { HamburgerButton } from '../Buttons';
import { Countries } from '../Countries/Countries';
import './Navigation.scss';

type Props = {};

export const Navigation = (props: Props) => {
  const [openNav, setOpenNav] = useState(false);
  const ref = useRef<HTMLUListElement>(null);
  useOnClickOutside(ref, () => setOpenNav(false));
  const handleCloseMobileNav = () => {
    setOpenNav((openNav) => !openNav);
  };

  return (
    <nav className="navigation">
      <ul className="navigation__items">
        <li className="navigation__item navigation__item--cities">
          <Countries />
        </li>
        <li className="navigation__item">
          <HamburgerButton onClick={handleCloseMobileNav} />
        </li>
      </ul>
      {openNav && (
        <ul className="navigation__items navigation__items--mobile" ref={ref}>
          <li
            className="navigation__item navigation__item--close-btn"
            onClick={() => setOpenNav(false)}
          >
            <button>X</button>
          </li>
          <li className="navigation__item navigation__item">
            {openNav && <Countries onSelectItem={() => setOpenNav(false)} />}
          </li>
        </ul>
      )}
    </nav>
  );
};
