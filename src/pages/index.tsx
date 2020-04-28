import { useEffect, useState } from "react";
import countdown from "countdown";

let remainingInterval: NodeJS.Timeout;

const remaining = () => countdown(new Date(3500, 0, 1)).toString();

const Home = () => {
  const [timeRemaining, setTimeRemaining] = useState(remaining());
  useEffect(() => {
    remainingInterval = setInterval(() => setTimeRemaining(remaining()), 1000);
    return () => clearInterval(remainingInterval);
  }, []);

  return (
    <main>
      <h1>
        Hey there, friend! <span className="emoji">🧙‍♂️</span>
      </h1>

      <p>
        Well, you've kinda got me in a bad spot here... This is clearly not the
        super cool, fresh and <span className="funky">funky</span> website I
        hoped to show you :(
      </p>

      <p>I guess at least it's fast and responsive, right? ⚡️</p>

      <p>Well from what I see, there are two options:</p>

      <ol>
        <li>
          You can either wait for my new website and checkout my techy stuff,
          projects and courses <br /> ETA: {timeRemaining} remaining (be sure to
          grab a coffee ☕️)
        </li>
        <li>
          Or you can{" "}
          <a
            href="mailto:roniemeque@icloud.com?subject=Hi Ronie!"
            title="Mail me"
          >
            mail me
          </a>
          , reach me on{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ronie-eduardo-meque-52389665/"
            title="React me out on LinkedIn"
          >
            LinkedIn
          </a>{" "}
          or take a peek at my{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/roniemeque"
            title="Check out my GitHub"
          >
            GitHub
          </a>
        </li>
      </ol>
    </main>
  );
};

export default Home;
