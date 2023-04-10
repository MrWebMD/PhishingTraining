import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBook,
  faEnvelopeOpen,
  faHeartPulse,
  faPhone,
  faSms,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
import Link from "next/link";
const Navigation = () => {
  return (
    <>
      <input
        type="checkbox"
        id="navigation__checkbox"
        className="navigation__checkbox"
      />
      <div className="navigation__spacer"></div>
      <label
        className="navigation__overlay"
        htmlFor="navigation__checkbox"
      ></label>
      <nav className="navigation">
        <div className="navigation__innerWrapper pageBoundary">
          <div className="navigation__mobileMenu">
            <div className="navigation__hamburgerWrapper">
              <label htmlFor="navigation__checkbox">
                <FontAwesomeIcon icon={faBars} />
              </label>
            </div>
            <div className="navigation__logoWrapper">
              <Logo />
            </div>
          </div>
          <div className="navigation__itemsWrapper">
            <ul className="navigation__items">
              <li className="navigation__item">
                <FontAwesomeIcon icon={faPhone} />
                <Link href="/vishing" className="navigation__link">
                  Vishing
                </Link>
              </li>
              <li className="navigation__item">
                <FontAwesomeIcon icon={faSms} />
                <Link href="/smishing" className="navigation__link">
                  Smishing
                </Link>
              </li>

              <li className="navigation__item">
                <FontAwesomeIcon icon={faHeartPulse} />
                <Link href="ive-been-phished" className="navigation__link">
                  I've been phished
                </Link>
              </li>
              <li className="navigation__item">
                <FontAwesomeIcon icon={faBook} />
                <Link href="skills-test" className="navigation__link">
                  Skills Test
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
