import AddressBar from "@/components/Layout/AddressBar";
import Super from "@/components/Layout/Super";
import Head from "next/head";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/images/smishing9.jpg",
    thumbnail: "/images/smishing9.jpg",
  },
  {
    original: "/images/smishing4.jpg",
    thumbnail: "/images/smishing4.jpg",
  },
  {
    original: "/images/smishing7.jpg",
    thumbnail: "/images/smishing7.jpg",
  },
  {
    original: "/images/smishing8.jpg",
    thumbnail: "/images/smishing8.jpg",
  },
  {
    original: "/images/smishing5.jpg",
    thumbnail: "/images/smishing5.jpg",
  },
  {
    original: "/images/smishing6.jpg",
    thumbnail: "/images/smishing6.jpg",
  },

  {
    original: "/images/smishing1.jpg",
    thumbnail: "/images/smishing1.jpg",
  },
  {
    original: "/images/smishing2.jpg",
    thumbnail: "/images/smishing2.jpg",
  },
  {
    original: "/images/smishing3.jpg",
    thumbnail: "/images/smishing3.jpg",
  },

  {
    original: "/images/smishing10.jpg",
    thumbnail: "/images/smishing10.jpg",
  },
];

const Smishing = () => {
  return (
    <>
      <Head>
        <title>PhishED | Smishing</title>
      </Head>
      <Super>
        <h2 className="contentHeading text-align-center">Smishing Gallery</h2>

        <ImageGallery items={images} />
      </Super>
      <main>
        <article>
          <section className="pageSection bg-theme-color-dark3">
            <AddressBar
              url={`https://phishing.mrwebmd.com/smishing#learn-the-basics`}
              tag="learn-the-basics"
            />
            <div className="pageBoundary">
              <div className="sectionGrid__cell">
                <h2 className="contentHeading">What is Smishing?</h2>
                <p>
                  Smishing is the practice of sending deceptive text messages
                  with the aim of getting the recipient to reveal sensitive
                  information or install malware.
                </p>
                <p>
                  People around the world recieve these types of messages on a
                  daily basis. In fact the{" "}
                  <a
                    href="https://www.robokiller.com/the-robokiller-report"
                    target="_blank"
                    className="link link--underlined"
                  >
                    2022 Robokiller report
                  </a>{" "}
                  states that between January - June of 2022, over $9 billion
                  dollars were estimated to be lost in damages due to smishing.
                  The Robokiller report projects that $28 billion dollars would
                  have been lost by the end of 2022.
                </p>
              </div>
            </div>
          </section>
          <section className="pageSection" data-aos="fade-right">
            <div className="sectionGrid sectionGrid--2col pageBoundary">
              <div className="sectionGrid__cell">
                <h2 className="contentHeading">Package Tracking Smishing</h2>

                <p>
                  One popular smishing method is to send out a bunch of messages
                  appearing to update the recipient about the status of a
                  delivery.
                </p>
                <p>
                  It is very common for online stores to provide SMS (Simple
                  Message Service / Text Message) updates about orders. Scammers
                  abuse this to trick the recipient into giving up information
                  under the pretense that the message is from an online store
                  they purchased from.
                </p>
                <p>
                  {" "}
                  <a
                    href="https://www.malwarebytes.com/blog/news/2022/04/usps-your-package-could-not-be-delivered-text-is-a-smishing-scam"
                    className="link link--underlined"
                    target="_blank"
                  >
                    Learn more about this type of scam at MalwareBytes
                  </a>
                </p>
              </div>
              <div className="sectionGrid__cell flex flex-center">
                <img
                  src="/images/smishing4.jpg"
                  width="300px"
                  className="sectionGrid__image"
                ></img>
              </div>
            </div>
          </section>
          <section className="pageSection bg-theme-color-dark3">
            <AddressBar
              url={`https://phishing.mrwebmd.com/smishing#defense`}
              tag="defense"
            />
            <div className="pageBoundary">
              <h2 className="contentHeading text-align-center">
                How to defend yourself
              </h2>
              <p className="text-align-center"></p>
              <ol className="list list--large">
                <li>Visit websites manually instead of clicking links.</li>
                <p>
                  When you recieve a text message claiming to be from a
                  reputable company, it is always safer to manually visit the
                  website address you know is correct in your browser rather
                  than click a link. This would provide you with a zero percent
                  chance of visiting a website you don't normally visit. Your
                  browser prefills this information normally for you.
                </p>
              </ol>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default Smishing;
