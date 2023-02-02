import Logo from "./Components/Layout/Logo";

function App() {
  return (
      <>
        <header className="superHeader">
          <div className="pageBoundary superHeader__contentWrapper">
            <h3 className="contentHeading contentHeading--bold">Millions of phishing emails, messages, and calls are made every year.</h3>
            <h1 className="contentHeading">Can you identify a phishing attempt?</h1>
            <button className="btn btn--outline btn--fullWidthOnMobile">Learn more</button>
          </div>
        </header>
        <main>
          <article>
            <h4 className="contentHeading">Phishing Basics</h4>
            <section className="sectionGrid sectionGrid--2col pageBoundary">
              <div className="sectionGrid__cell sectionGrid__cell--outline">
                <h2 className="contentHeading">Lorem ipsum dolor</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <span className="highlight">exercitation ullamco laboris nisi</span> ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

              </div>
              <div className="sectionGrid__cell text-align-center">
                <img className="sectionGrid__image" src="https://via.placeholder.com/450"/>
                <p className="caption">Image Credits: Author name</p>
              </div>
            </section>

            <section className="sectionGrid sectionGrid--reverseOnMobile sectionGrid--2col pageBoundary">
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
