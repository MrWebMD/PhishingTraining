import AddressBar from "./Components/Layout/AddressBar";
import Super from "./Components/Layout/Super";
import phishingAndSpam from "./images/phishing-and-spam.png";
import phishingAndSpam2 from "./images/phishing-and-spam-2.png";
import Email from "./Components/Email/Email";
function App() {
  const phishingEmailFrom = (
    <span className="wrapText">
      Microsoft Account Team&lt;micrοsftaccountteam@outlook.com&gt;
      <span className="tooltip tooltip--centerVertically">
        <p className="tooltiptext">
          The "o" character looks odd. It is actually a greek omicron used to mask the blocked microsoft keyword in outlook email addresses. See{" "}
          <a className="link link--underlined" href="https://www.malwarebytes.com/blog/news/2017/10/out-of-character-homograph-attacks-explained" target="_blank">
            Malware Bytes Homograph attacks
          </a>{" "}
        </p>
        <span className="pulse2"></span>
      </span>
    </span>
  );

  const phishingEmailTo = <span>Jessica Kimberly&lt;jessicak@gmail.com&gt;</span>;

  const phishingEmailContent = (
    <>
      <p>
        Hello{" "}
        <span className="tooltip tooltip--centerVertically">
          <p className="tooltiptext">The greeting is very impersonal. If you receive an email from Microsoft it should include some basic account details rather than something generic.</p>
          <span className="pulse2"></span>
        </span>
        Dear,
      </p>
      <p>We've had to temporarily disable your Microsoft due to suspicious activity.</p>
      <p>To reactive your account, we're going to need to very some information.</p>
      <p>Please continue to verify your account.</p>
      <button className="btn btn--outline btn--fullWidthOnMobile filter-brightness-hover">Verify</button>
    </>
  );

  return (
    <>
      <Super>
        <h3 className="contentHeading contentHeading--bold">More than 60% of all breaches include phishing followed by stolen credentials.</h3>
        <span className="contentHeading__citation">
          <a className="link link--underlined" href="https://www.verizon.com/business/en-gb/resources/2022-data-breach-investigations-report-dbir.pdf" target="_blank">
            Source: 2022 Verizon Data Breach Investigation Report
          </a>
        </span>
        <h1 className="contentHeading">Can you identify a phishing attempt?</h1>
        <button className="btn btn--outline btn--fullWidthOnMobile filter-brightness-hover">Learn more</button>
      </Super>
      <main>
        <article>
          {/* <h4 className="contentHeading">Phishing Basics</h4> */}
          <AddressBar url={`${window.location.protocol}//${window.location.host}#learn-the-basics`} tag="learn-the-basics" />
          <section className="sectionGrid sectionGrid--2col pageBoundary" data-aos="fade-right">
            <div className="sectionGrid__cell">
              <h2 className="contentHeading">What is phishing?</h2>
              <p>
                Phishing is a type of
                <span className="highlight tooltip">
                  social engineering attack
                  <span className="tooltiptext">
                    Manipulating someone to divulge sensitive or confidential information, usually through digital communication{" "}
                    <a className="link link--underlined" href="https://us.norton.com/blog/emerging-threats/what-is-social-engineering" target="_blank">
                      Norton Security
                    </a>
                  </span>
                </span>
                that aims to get the victim to provide senstive information such as account credentials or personally identifiable information (PII).
              </p>

              <p>These kinds of attacks generally happen through email (phishing), over the phone (vishing), and through text messages (vishing).</p>
            </div>
            <div className="sectionGrid__cell text-align-center">
              <img className="sectionGrid__image" width="500px" src={phishingAndSpam} alt="A laptop with spam appearing on the screen" />
            </div>
          </section>
          <section className="pageBoundary">
            <h2 className="contentHeading text-align-center">A quick look at a phishing email</h2>
            <p className="text-align-center">Click on areas with a pulse to learn more.</p>
            <Email from={phishingEmailFrom} time="2:09 PM" to={phishingEmailTo} subject="Suspicious activity detected">
              {phishingEmailContent}
            </Email>
          </section>

          <section className="sectionGrid sectionGrid--reverseOnMobile sectionGrid--2col pageBoundary" data-aos="fade-left">
            <div className="sectionGrid__cell text-align-center">
              <img className="sectionGrid__image" width="500px" alt="A cybercriminal who has stolen documents" src={phishingAndSpam2} />
            </div>
            <div className="sectionGrid__cell">
              <h2 className="contentHeading">Phishing has resulted in a combined total of $44,213,707 in financial losses in 2021.</h2>
              <p>
                Additionally, reports to the&nbsp;
                <a className="link link--underlined" href="https://www.ic3.gov/Media/PDF/AnnualReport/2021_IC3Report.pdf" target="_blank">
                  Internet Crime Complaint Center (IC3)
                </a>
                &nbsp; show that phishing claimed 323,972 victims in 2021 alone.
              </p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

export default App;
