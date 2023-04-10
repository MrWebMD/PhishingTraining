import Head from "next/head";

export default function IveBeenPhished() {
  return (
    <>
      <Head>
        <title>PhishED | Home</title>
      </Head>

      <main>
        <article>
          <section className="pageSection ">
            <div
              data-aos="fade-right"
              className="sectionGrid sectionGrid--2col pageBoundary"
            >
              <div className="sectionGrid__cell">
                <h2 className="contentHeading">How to change your password</h2>
                <ol>
                  <li>
                    Find the login page on the website you want to change your
                    password on.
                  </li>
                  <li>Click "Forgot my password".</li>
                  <li>
                    Follow the steps provided to verify yourself and reset your
                    password.
                  </li>
                </ol>
                <p>
                  Typically these steps are the same across all websites.
                  Changing your password may also force anyone who is currently
                  logged in to log out and re-enter the new password. If you
                  have a Google Account, you have much more power over this.
                </p>
              </div>
              <div className="sectionGrid__cell text-align-center">
                <img
                  className="sectionGrid__image"
                  width="500px"
                  src="/images/forgot-password.jpg"
                  alt="A laptop with spam appearing on the screen"
                />
              </div>
            </div>
          </section>
          <section className="pageSection ">
            <div
              data-aos="fade-right"
              className="sectionGrid sectionGrid--2col pageBoundary"
            >
              <div className="sectionGrid__cell">
                <h2 className="contentHeading">
                  Logging out someone logged in to your Google account
                </h2>

                <p>
                  With a Google Account, you have the ability to revoke sessions
                  by device. You can find these settings by visiting google.com,
                  clicking on your profile icon in the top right corner, and
                  then clicking "Manage your Google Account".
                </p>
              </div>
              <div className="sectionGrid__cell text-align-center">
                <img
                  className="sectionGrid__image"
                  width="500px"
                  src="/images/google-account-settings.jpg"
                  alt="A laptop with spam appearing on the screen"
                />
              </div>
            </div>
          </section>
          <section className="pageSection ">
            <div
              data-aos="fade-right"
              className="sectionGrid sectionGrid--2col pageBoundary"
            >
              <div className="sectionGrid__cell">
                <p>Once you're in your Google account settings</p>
                <ol>
                  <li>Click the "Security" tab</li>
                  <li>Scroll down until you see "Your devices"</li>
                  <li>Press "Manage all devices"</li>
                  <li>Click any unrecognized device</li>
                  <li>Press sign out</li>
                </ol>
                <p>
                  This will force the device to log out of your Google account.
                </p>
              </div>
              <div className="sectionGrid__cell text-align-center">
                <img
                  className="sectionGrid__image"
                  width="500px"
                  src="/images/manage-devices.jpg"
                  alt="A laptop with spam appearing on the screen"
                />
              </div>
            </div>
          </section>
          <section className="pageSection ">
            <div
              data-aos="fade-right"
              className="sectionGrid sectionGrid--2col pageBoundary"
            >
              <div className="sectionGrid__cell">
                <h2 className="contentHeading">How to remove malware</h2>
                <p>
                  If you're on windows, you already have an Anti-Virus software
                  from microsoft pre-installed. It's called "Microsoft
                  Defender". Here's{" "}
                  <a
                    href="https://www.howtogeek.com/679263/how-to-scan-with-microsoft-defender-antivirus-on-windows-10/"
                    className="link link--underlined"
                    target="_blank"
                  >
                    how to run a malware scan with Microsoft
                  </a>
                </p>

                <p>
                  Additionally, you can install a free anti-virus software
                  called{" "}
                  <a
                    href="https://www.malwarebytes.com/"
                    className="link link--underlined"
                    target="_blank"
                  >
                    MalwareBytes.
                  </a>{" "}
                  The free version of this software should be enough to remove
                  most common types of malware.
                </p>
              </div>
              <div className="sectionGrid__cell text-align-center">
                <img
                  className="sectionGrid__image"
                  width="500px"
                  src="/images/malwarebytes.webp"
                  alt="A laptop with spam appearing on the screen"
                />
              </div>
            </div>
          </section>
          <section className="pageSection bg-theme-color-dark3">
            <div className="pageBoundary">
              <h2 className="contentHeading">
                Learn more about what it takes to defend yourself against
                phishing attacks
              </h2>
              <Link href="/">
                <button className="btn btn--outline btn--fullWidthOnMobile filter-brightness-hover">
                  What is phishing?
                </button>
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
