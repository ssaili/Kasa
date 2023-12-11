import footerLogo from "../assets/kasa-logo-footer.png";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={footerLogo} alt="logo de kasa" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
