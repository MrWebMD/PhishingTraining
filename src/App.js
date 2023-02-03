import AddressBar from "./Components/Layout/AddressBar";
import phishingAndSpam from "./images/phishing-and-spam.png";

function App() {
  return (
      <>
        <header className="superHeader" data-aos="fade-in">
          <div className="pageBoundary superHeader__contentWrapper">
            <h3 className="contentHeading contentHeading--bold">More than 60% of all breaches include phishing followed by stolen credentials.</h3>
            <span className="contentHeading__citation">
              <a className="link link--underlined" href="https://www.verizon.com/business/en-gb/resources/2022-data-breach-investigations-report-dbir.pdf" target="_blank">Source: 2022 Verizon Data Breach Investigation Report</a>
            </span>
            <h1 className="contentHeading">Can you identify a phishing attempt?</h1>
            <button className="btn btn--outline btn--fullWidthOnMobile filter-brightness-hover">Learn more</button>
          </div>
        </header>
        <main>
          <article>
            {/* <h4 className="contentHeading">Phishing Basics</h4> */}
            <AddressBar url={`https://${window.location.host}#learn-the-basics`} tag="learn-the-basics"/>
            <section className="sectionGrid sectionGrid--2col pageBoundary" data-aos="fade-right">
              <div className="sectionGrid__cell">
                <h2 className="contentHeading">What is phishing?</h2>
                <p>Phishing is a type of 
                  <span className="highlight tooltip">social engineering attack
                  <span className="tooltiptext">Manipulating someone to divulge sensitive or confidential information, usually through digital communication <a className="link link--underlined" href="https://us.norton.com/blog/emerging-threats/what-is-social-engineering" target="_blank">Norton Security</a></span>
                </span> 
                that aims to get the victim to provide senstive information such as account credentials or personally identifiable information (PII).</p>

                <p>These kinds of attacks generally happen through email (phishing), over the phone (vishing), and through text messages (vishing)</p>

              </div>
              <div className="sectionGrid__cell text-align-center">
                <img className="sectionGrid__image" width="500px" src={phishingAndSpam}/>
              </div>
            </section>

            <section className="sectionGrid sectionGrid--reverseOnMobile sectionGrid--2col pageBoundary" data-aos="fade-left">
              <div className="sectionGrid__cell text-align-center">
                <img className="sectionGrid__image" src="https://via.placeholder.com/450"/>
                <p className="caption">Image Credits: Author name</p>
              </div>
              <div className="sectionGrid__cell">
                <h2 className="contentHeading">Lorem ipsum dolor</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              </div>
              
            </section>
          </article>
        </main>
      </>
  );
}

export default App;
