import { useState } from "react";
import me from "./assets/me.png";
import "./App.css";

function App() {
  const [firstExpand, setFirstExpand] = useState(false);
  const [secondExpand, setSecondExpand] = useState(false);
  const [thirdExpand, setThirdExpand] = useState(false);
  const [fourthExpand, setFourthExpand] = useState(false);

  const handleFirstExpand = () => {
    setFirstExpand(!firstExpand);
  };

  const handleSecondExpand = () => {
    setSecondExpand(!secondExpand);
  };

  const handleThirdExpand = () => {
    setThirdExpand(!thirdExpand);
  };

  const handleFourthExpand = () => {
    setFourthExpand(!fourthExpand);
  };
  return (
    <div className="App">
      <header>
        <h1>Expensify's Next</h1>
        <h2>
          <em>React Full Stack Engineer</em>
        </h2>
      </header>
      <img src={me} className="photo" alt="me with dahlia" />
      <main className="questions">
        <section className="question" onClick={handleFirstExpand}>
          <h5>
            What's the URL of your website? If you don't have one, why not?
          </h5>
          {firstExpand && (
            <div className="portfolio">
              <a
                href="https://www.michellenygren.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.michellenygren.dev
              </a>
            </div>
          )}
        </section>
        <section className="question" onClick={handleSecondExpand}>
          <h5>
            What's your coding history? When did you start, and what have you
            done between then and now?
          </h5>
          {secondExpand && (
            <div className="expanded">
              <p>
                My first introduction to coding was 10 years ago, when I was a
                digital marketer for a non-profit writing and tutoring center. I
                came across something novel called ‘SEO’, and learned to change
                the title in our company’s website with hopes of improving our
                Google result. I felt like an absolute wizard! A hacker! A
                coding genius!
              </p>
              <p>
                At this time of my life, I did not know that a job existed where
                I could <em>always</em> feel like a wizard. I knew that I loved
                creating beautiful things and using logical steps to
                problem-solve, I loved being precise, organized, detail-driven;
                but I also knew that I loved using the empathetic side of me to
                connect with others. After a stint as a digital marketer and
                another as a professional pastry chef, I was introduced to
                coding (real coding! real wizardry!) by a friend who had studied
                computer science. “I think you may actually <em>love</em> this,”
                he said over coffee one day. And thus my coding journey began!
              </p>
              <p>
                I started in 2020: podcasts about coding career changes, YouTube
                tutorials, free online resources (GA workshops, FreeCodeCamp,
                CodeAcademy), a subscription to Treehouse, and eventually worked
                through a few longer introductory programs. I was hooked! I
                enrolled in a 6-month bootcamp,{" "}
                <a
                  href="https://www.alchemycodelab.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alchemy Code Lab
                </a>
                , and quit my job.
              </p>
              <p>
                Fast-forward to now: I am highly proficient in JavaScript and
                React (which I absolutely love), and have experience building
                and managing front-end, back-end, and full-stack web
                applications. I’ve spent the last 8 months coding full-time,
                using tools like Github, Supabase, Postman, VSCode, Heroku and
                Netlify to collaborate and develop big and small projects.
              </p>
              <p>
                What started as a dive into wizardy has unfolded in a way I’ve
                never imagined: creating beautiful, accessible, empathetic web
                experiences that center on user experience. After pivoting into
                this career, I am proud to say that I am an intuitive problem
                solver, an engaging collaborator, and a meticulous developer.
              </p>
            </div>
          )}
        </section>
        <section className="question" onClick={handleThirdExpand}>
          <h5>
            What do you want to do with the rest of your life, and how is
            Expensify a step toward your long-term goals?
          </h5>
          {thirdExpand && (
            <div className="expanded">
              <p>
                My forever goal in life is to continue learning, growing, and
                expanding - both as an individual and a developer. I decided to
                learn software development because I believed I could use
                technology to solve bigger, more human-centered problems. The
                internet should be equitable, and it should support and connect
                us as human beings. What do I want to do with the rest of my
                life? Contribute to making sure that happens!
              </p>
              <p>
                As an avid budgeter, I also believe finances shouldn’t be
                complicated, and I know how important it is to build financial
                solutions to help. Greater than that, though, I’m deeply
                inspired by Expensify’s underlying mission of solving real,
                substantial, human-centered problems, and am excited to learn
                about the launch of Expensify.org in 2020. I’m moved by the
                transparency of Expensify’s manifesto (Life Goals: Live Rich,
                Have Fun, and Save The World; Two Rules: Get Shit Done and Don’t
                Ruin It For Everybody Else; Core Qualities: Talent, Ambition,
                and Humility), and would be honored to join the team to uphold
                these pillars.
              </p>
              <p>
                Becoming an Expensify employee would directly lead to my
                long-term goals of continual growth and using technology for
                good.
              </p>
            </div>
          )}
        </section>
        <section className="question" onClick={handleFourthExpand}>
          <h5>
            How did you hear about us? A job posting? Chalk on a sidewalk? From
            a friend? Let us know where you saw this opening.
          </h5>
          {fourthExpand && (
            <div className="expanded">
              <p>
                I originally saw Expensify’s job posting on the{" "}
                <a href="https://www.womenwhocode.com/jobs/13267">
                  Women Who Code
                </a>{" "}
                job board.
              </p>
            </div>
          )}
        </section>
      </main>
      <footer className="sites">
        <a
          className="link"
          href="https://www.linkedin.com/in/michellenygren/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My LinkedIn
        </a>
        <a
          className="link"
          href="https://www.michellenygren.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Portfolio
        </a>
        <a
          className="link"
          href="https://github.com/michellerenehey"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github
        </a>
      </footer>
    </div>
  );
}

export default App;
