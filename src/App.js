import me from "./assets/me.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>
        Expensify's Next <br />
        <em>React Full Stack Engineer</em>
      </h1>
      <img src={me} className="App-logo" alt="me with dahlia" />
      <div>
        <section>First question</section>
        <section>Second question</section>
        <section>Third question</section>
      </div>
      <a
        className="App-link"
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
