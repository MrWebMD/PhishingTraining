import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <img
        className="websiteLogo"
        src="/images/phished-logo.svg"
        alt="Phishing education logo of phishing.mrwebmd.com"
      />
    </Link>
  );
};

export default Logo;
