import AddressBar from "@/components/Layout/AddressBar";
import Super from "@/components/Layout/Super";
import Head from "next/head";

const Vishing = () => {
  return (
    <>
      <Head>
        <title>PhishED | Vishing</title>
      </Head>
      <Super>
        <h1 className="contentHeading">
          Learn about vishing with a real world example
        </h1>
        <h3 className="contentHeading contentHeading--bold">
          The following content was provided by{" "}
          <a
            href="https://darknetdiaries.com/about/"
            target="_blank"
            className="link link--underlined"
          >
            Jack Rhysider
          </a>{" "}
          from the{" "}
          <a
            href="https://darknetdiaries.com/"
            className="link link--underlined"
          >
            Dark Net Diaries
          </a>{" "}
          podcast.
        </h3>
        <iframe
          width="660"
          height="415"
          className="youtubeEmbed"
          src="https://www.youtube-nocookie.com/embed/09kH2qLrx8A?start=2894"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Super>
      <main>
        <article>
          <section className="pageSection bg-theme-color-dark3">
            <AddressBar
              url={`https://phishing.mrwebmd.com/vishing#social-engineering`}
              tag="social-engineering"
            />
            <div className="pageBoundary">
              <div className="sectionGrid__cell">
                <h2 className="contentHeading">Who is Christopher Hagnagy?</h2>

                <p>
                  In order to learn about Vishing, we're going to analyze a real
                  phone call from a professional social engineer named
                  Christopher Hagnagy. Christopher is the founder and CEO of{" "}
                  <a
                    className="link link--underlined"
                    href="https://www.social-engineer.com/"
                    target="_blank"
                  >
                    Social-Engineer LLC
                  </a>
                  . He holds the title of "Chief Human Hacker", rightfully so.
                  Social-Engineer offers security awareness training and
                  penetration testing.{" "}
                </p>

                <p>
                  Penetration testing is an occupation where companies pay you
                  to find their security related weaknesses. The areas audited
                  may include network security, web application security,
                  phishing awareness, and the physical security of a buildings.{" "}
                </p>
              </div>
            </div>
          </section>
          <section className="pageSection">
            <div
              data-aos="fade-right"
              className="sectionGrid sectionGrid--2col pageBoundary"
            >
              <div className="sectionGrid__cell">
                <h2 className="contentHeading">First, some context</h2>

                <p>
                  In a 1 hour interview with Christopher Hagnagy by Jack
                  Rhysider in an episode of{" "}
                  <a
                    className="link link--underlined"
                    href="https://darknetdiaries.com"
                    target="_blank"
                  >
                    Darknet Diaries{" "}
                  </a>
                  , we get rare insight into a real vishing phone call. This
                  clip offers some background information for understanding the
                  phone call next. Take a listen.
                </p>
              </div>
              <div className="sectionGrid__cell text-align-center">
                <div className="audioContainer">
                  <h3>
                    When You Can't Breach the Network, Hack the Humans🎙Darknet
                    Diaries Ep. 69: Human Hacker
                  </h3>
                  <audio src="/audio/the-story-starts.mp3" controls />
                  <p>
                    <a
                      className="link link--underlined"
                      href="https://darknetdiaries.com/episode/69/"
                      target="_blank"
                    >
                      Source
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="pageSection bg-theme-color-dark3">
            <div data-aos="fade-left" className="pageBoundary">
              <div className="sectionGrid__cell">
                <h2 className="contentHeading">Stealing credentials</h2>

                <p>
                  Christopher began his phishing awareness program for one of
                  his clients by sending phishing emails to all the client's
                  employees. This amounted to over 1000 emails being sent out
                  claiming to be a company sponsored iPhone giveaway.
                </p>
                <blockquote className="quote">
                  "From this e-mail alone, Chris got 750 people to click the
                  link and then go to his website and enter in their work
                  username and password." - Jack Rhysider
                </blockquote>
              </div>
            </div>
          </section>
          <section className="pageSection">
            <div
              data-aos="fade-right"
              className="sectionGrid sectionGrid--2col pageBoundary"
            >
              <div className="sectionGrid__cell">
                <h2 className="contentHeading">
                  Making employees willingly install malware
                </h2>

                <p>
                  As stunning as this is, this wasn't the end. Part of
                  Christopher's goal in this engagement was to get access to the
                  clients internal network. This means that Christopher must get
                  remote access to a computer connected to the companies
                  network.
                </p>
                <p>
                  He accomplished this by pretending to be an employee within
                  the clients IT department to provide computer cleaning
                  software in response to the employees clicking a phishing
                  email.
                </p>
              </div>
              <div className="sectionGrid__cell text-align-center">
                <div className="audioContainer">
                  <h3>
                    When You Can't Breach the Network, Hack the Humans🎙Darknet
                    Diaries Ep. 69: Human Hacker
                  </h3>
                  <audio src="/audio/phone-call.mp3" controls />
                  <p>
                    <a
                      className="link link--underlined"
                      href="https://darknetdiaries.com/episode/69/"
                      target="_blank"
                    >
                      Source
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="pageSection">
            <div className="pageBoundary">
              <h2 className="contentHeading text-align-center">
                How to protect against vishing
              </h2>
              <p className="text-align-center"></p>
              <ol className="list list--large">
                <li>Verify the caller</li>
                <p>
                  Christopher called the employees claiming to be someone within
                  their IT department. This allowed him to leverage this
                  position of trust to install malware. The employees could have
                  verified they were speaking with the right person by
                  referencing their internal directory containing accurate
                  contact information. If you ever receive an urgent call from a
                  company you trust, it is safer to hang up the call and then
                  call the phone number listed on their website yourself.
                </p>

                <li>Don't install unknown software.</li>
                <p>
                  The victim of this phone call was told to install a "PC
                  cleaning" software from ftp://update-****.com . This url is
                  not associated with their company website in any way. After
                  opening this in their browser, they are greeted with an
                  executable file to download and run. This should be a dead
                  giveaway. Never download software from untrusted sources,
                  especially not over the phone, through email, text messages,
                  or similar. In most cases, usually those responsible for
                  certain technology at a company have the means of performing
                  these maintenance related tasks remotely.
                </p>
                <div className="text-align-center">
                  <div>
                    <img
                      src="/images/unknown-publisher-message.svg"
                      alt="Windows warns that the publisher is unknown"
                      width="400px"
                      className="image image--max-width-100 margin-0-auto"
                    />
                  </div>
                  <a
                    className="link link--underlined"
                    href="https://codesigningstore.com/what-is-an-unknown-publisher-warning"
                    target="_blank"
                  >
                    Source
                  </a>
                </div>
              </ol>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default Vishing;
