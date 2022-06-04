import me from "./assets/me.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="App">
      <h1>Expensify's Next</h1>
      <h2>
        <em>React Full Stack Engineer</em>
      </h2>
      <img src={me} className="photo" alt="me with dahlia" />
      <div className="questions">
        <section className="question" onClick={handleExpand}>
          <h5>
            What's the URL of your website? If you don't have one, why not?
          </h5>
          <p className="arrow" onClick={handleExpand}>
            ▼
          </p>
          {isExpanded && (
            <>
              <a
                href="https://www.michellenygren.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.michellenygren.dev
              </a>
            </>
          )}
        </section>
        <section className="question">
          <h5>
            What's your coding history? When did you start, and what have you
            done between then and now?
          </h5>
        </section>
        <section className="question">
          <h5>
            What do you want to do with the rest of your life, and how is
            Expensify a step toward your long-term goals?
          </h5>
        </section>
      </div>
      <a
        className="link"
        href="https://www.michellenygren.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        More About Me
      </a>
    </div>
  );
}

export default App;
