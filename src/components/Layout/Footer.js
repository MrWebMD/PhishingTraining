import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="pageBoundary footer__itemsGrid">
        <div className="footer__logo">
          <Logo />
        </div>
        <ul className="footer__items">
          <li className="footer__item footer__item--header">
            <a>Types of phishing</a>
          </li>
          <li className="footer__item">
            <Link href="/" className="footer__link">
              Email
            </Link>
          </li>
          <li className="footer__item">
            <Link href="/vishing" className="footer__link">
              Vishing
            </Link>
          </li>
          <li className="footer__item">
            <Link href="/smishing" className="footer__link">
              Smishing
            </Link>
          </li>
          <li className="footer__item">
            <Link href="ive-been-phished" className="footer__link">
              I've been phished
            </Link>
          </li>
          <li className="footer__item">
            <Link href="skills-test" className="footer__link">
              Skills Test
            </Link>
          </li>
        </ul>
        <ul className="footer__items">
          <li className="footer__item footer__item--header">
            <a>Resources</a>
          </li>
          <li className="footer__item">
            <Link href="ive-been-phished" className="footer__link">
              I've been phished
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
