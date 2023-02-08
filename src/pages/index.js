import Head from "next/head";
import Image from "next/image";
import Super from "@/components/Layout/Super";
import AddressBar from "@/components/Layout/AddressBar";
import { useRouter } from "next/router";
import Email1 from "@/components/Phishing/Email1";

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
        <button className="btn btn--outline btn--fullWidthOnMobile filter-brightness-hover">
          Learn more
        </button>
      </Super>
      <main>
        <article>
          {/* <h4 className="contentHeading">Phishing Basics</h4> */}
          <section className="pageSection bg-theme-color-dark3">
            <AddressBar
              url={`${"https:"}//${router.basePath}#learn-the-basics`}
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
                There are 5 simple steps that you can take to protect yourself
                from all forms of phishing.
              </h2>
              <p className="text-align-center"></p>
              <ol className="list list--large text-align-center">
                <li>Verify the sender</li>
                <li> </li>
              </ol>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
