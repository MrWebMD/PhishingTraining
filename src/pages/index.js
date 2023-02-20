import Head from "next/head";
import Image from "next/image";
import Super from "@/components/Layout/Super";
import AddressBar from "@/components/Layout/AddressBar";
import { useRouter } from "next/router";
import Email1 from "@/components/Phishing/Email1";
import Email from "@/components/Email/Email";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Super>
        <h3 className="contentHeading contentHeading--bold">
          More than 60% of all breaches include phishing followed by stolen
          credentials.
        </h3>
        <span className="contentHeading__citation">
          <a
            className="link link--underlined"
            href="https://www.verizon.com/business/en-gb/resources/2022-data-breach-investigations-report-dbir.pdf"
            target="_blank"
          >
            Source: 2022 Verizon Data Breach Investigation Report
          </a>
        </span>
        <h1 className="contentHeading">Can you identify a phishing attempt?</h1>
        <Link href="https://phishing.mrwebmd.com#learn-the-basics">
          <button className="btn btn--outline btn--fullWidthOnMobile filter-brightness-hover">
            Learn more
          </button>
        </Link>
      </Super>
      <main>
        <article>
          {/* <h4 className="contentHeading">Phishing Basics</h4> */}
          <section className="pageSection bg-theme-color-dark3">
            <AddressBar
              url={`https://phishing.mrwebmd.com#learn-the-basics`}
              tag="learn-the-basics"
            />
            <div
              data-aos="fade-right"
              className="sectionGrid sectionGrid--2col pageBoundary"
            >
              <div className="sectionGrid__cell">
                <h2 className="contentHeading">What is phishing?</h2>
                <p>
                  Phishing is a type of
                  <span className="highlight tooltip">
                    social engineering attack
                    <span className="tooltiptext">
                      Manipulating someone to divulge sensitive or confidential
                      information, usually through digital communication{" "}
                      <a
                        className="link link--underlined"
                        href="https://us.norton.com/blog/emerging-threats/what-is-social-engineering"
                        target="_blank"
                      >
                        Norton Security
                      </a>
                    </span>
                  </span>
                  that aims to get the victim to provide senstive information
                  such as account credentials or personally identifiable
                  information (PII).
                </p>

                <p>
                  These kinds of attacks generally happen through email
                  (phishing), over the phone (vishing), and through text
                  messages (vishing).
                </p>
              </div>
              <div className="sectionGrid__cell text-align-center">
                <img
                  className="sectionGrid__image"
                  width="500px"
                  src="/images/phishing-and-spam.png"
                  alt="A laptop with spam appearing on the screen"
                />
              </div>
            </div>
          </section>
          <section className="pageSection">
            <div className="pageBoundary">
              <h2 className="contentHeading text-align-center">
                A quick look at a phishing email
              </h2>
              <p className="text-align-center">
                Click on areas with a pulse to learn more.
              </p>
              <Email1 />
            </div>
          </section>

          <section className="pageSection bg-theme-color-dark3">
            <div
              data-aos="fade-left"
              className="sectionGrid sectionGrid--reverseOnMobile sectionGrid--2col pageBoundary"
            >
              <div className="sectionGrid__cell text-align-center">
                <img
                  className="sectionGrid__image"
                  width="500px"
                  alt="A cybercriminal who has stolen documents"
                  src="/images/phishing-and-spam-2.png"
                />
              </div>
              <div className="sectionGrid__cell">
                <h2 className="contentHeading">
                  Phishing has resulted in a combined total of $44,213,707 in
                  financial losses in 2021.
                </h2>
                <p>
                  Additionally, reports to the&nbsp;
                  <a
                    className="link link--underlined"
                    href="https://www.ic3.gov/Media/PDF/AnnualReport/2021_IC3Report.pdf"
                    target="_blank"
                  >
                    Internet Crime Complaint Center (IC3)
                  </a>
                  &nbsp; show that phishing claimed 323,972 victims in 2021
                  alone.
                </p>
              </div>
            </div>
          </section>
          <section className="pageSection">
            <div className="pageBoundary">
              <h2 className="contentHeading text-align-center">
                There are 3 simple steps that you can take to protect yourself
                from phishing emails.
              </h2>
              <p className="text-align-center"></p>
              <ol className="list list--large">
                <li>Avoid clicking links</li>
                <p>
                  Whenever possible instead of clicking on a link within an
                  email or text message, manually type the address of the
                  website you know is real. Often times your browser will
                  autofill the correct address for you. This will limit your
                  exposure to potentially spoofed website domains.
                </p>
                <div className="text-align-center">
                  <img
                    src="/images/browser-auto-complete.gif"
                    alt="Browser autofills website address"
                    className="image image--max-width-100"
                  />
                </div>
                <li>Verify the sender</li>

                {/* <Email
                  from={
                    <span className="wrapText">
                      accounts@google-account-alert.com
                    </span>
                  }
                  fromName="Google"
                  time="2:09 PM"
                  to="jessicak@gmail.com"
                  toName="Jessica Kimberly"
                  subject="Your password has been reset"
                /> */}
                <p>
                  An email can be verified by matching the senders email address
                  with what you know is reputable. For example
                  no-reply@google-account-alert.com would be an email address an
                  attacker would use. no-reply@google.com is an official google
                  email address because it ends with google.com with no
                  revisions.
                </p>
                <p>
                  You can learn more from this{" "}
                  <a
                    href="https://support.google.com/mail/answer/8253?hl=en"
                    target="_blank"
                    className="link link--underlined"
                  >
                    google support article
                  </a>
                  .
                </p>
                <div className="text-align-center">
                  <img
                    src="/images/verify-the-sender-1.gif"
                    alt="Browser autofills website address"
                    width="700px"
                    className="image image--max-width-100"
                  />
                </div>

                <li>Be skeptcial of impersonal messages</li>
                <p>
                  Phishing emails and text messages are sent on a massive scale,
                  reaching the inboxes of thousands of people. This often leads
                  to phishing attempts being very impersonal. When a message
                  calls for you to provide personally identifiable information
                  or does not at least include some your own basic info, then
                  avoid interacting with it.
                </p>
              </ol>
            </div>
          </section>
          <section className="pageSection bg-theme-color-dark3">
            <div className="pageBoundary">
              <h3 className="contentHeading contentHeading--bold">
                There was an estimated 66 billion automated spam text messages
                made in 2022 according to the{" "}
                <a
                  href="https://www.robokiller.com/the-robokiller-report"
                  target="_blank"
                  className="link link--underlined"
                >
                  2022 Robokiller Report
                </a>
              </h3>
              <h2 className="contentHeading">
                Learn about smishing - phishing in the form of text messages.
              </h2>
              <Link href="/smishing">
                <button className="btn btn--outline btn--fullWidthOnMobile filter-brightness-hover">
                  Smishing
                </button>
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
