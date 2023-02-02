import Logo from "./Logo";

const Footer = () => {
  return <footer className="footer">
    <div class="pageBoundary footer__itemsGrid">
      <div class="footer__logo">
        <Logo/>
      </div>
      <ul className="footer__items">
        <li className="footer__item footer__item--header"><a>Types of phishing</a></li>
        <li className="footer__item">
          <a className="footer__link">Email</a>
          </li>
        <li className="footer__item">
          <a className="footer__link">Vishing</a>
          </li>
        <li className="footer__item">
          <a className="footer__link">Smishing</a>
          </li>
        <li className="footer__item">
          <a className="footer__link">Whaling</a>
          </li>
        <li className="footer__item">
          <a className="footer__link">I've been phished</a>
          </li>
        <li className="footer__item">
          <a className="footer__link">Skills Test</a>
        </li>
      </ul>
      <ul className="footer__items">
        <li className="footer__item footer__item--header"><a>Types of phishing</a></li>
        <li className="footer__item">
          <a className="footer__link">aliquip</a>
          </li>
        <li className="footer__item">
          <a className="footer__link">deserunt</a>
          </li>
        <li className="footer__item">
          <a className="footer__link">ullamco</a>
          </li>
        <li className="footer__item">
          <a className="footer__link">incididunt</a>
          </li>
        <li className="footer__item">
          <a className="footer__link">cupidatat</a>
          </li>
        <li className="footer__item">
          <a className="footer__link">proident</a>
        </li>
      </ul>
    </div>
  </footer>
} 

export default Footer;