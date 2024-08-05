import React from "react";

interface CommandItem {
  command: string;
  output: JSX.Element | string;
}

export const getOutput = (
  command: string,
  setCommand: React.Dispatch<React.SetStateAction<CommandItem[]>>
): JSX.Element | string => {
  switch (command.toLowerCase()) {
    case "help":
      return (
        <div>
          Available commands: <br />
          <span className="text-blue-400 ml-3">about</span> - If your only goal
          is to stalk me, go ahead with this one :) <br />
          <span className="text-blue-400 ml-3">socials</span> - If I seem
          interesting enough to you <br />
          <span className="text-blue-400 ml-3">skills</span> - I guess, I am
          good at certain things <br />
          <span className="text-blue-400 ml-3">projects</span> - I have made
          some cool stuff too ;) <br />
          <span className="text-blue-400 ml-3">resume</span> - Checkout my
          Resume <br />
          <span className="text-blue-400 ml-3">clear</span> - Clear the
          terminal<br />
          <span className="text-blue-400 ml-3">experience</span> - Checkout my
          professional experience <br />
          <span className="text-blue-400 ml-3">goals</span> - My future plans
          <br />
        </div>
      );
    case "about":
      return (
        <div>
          Hello, Nice to meet you <br />I am{" "}
          <span className="text-blue-400">Abhinav Kumar Singh</span>, a 3rd-year
          undergraduate student at{" "}
          <span className="text-blue-300 ml-3">
            <a href="https://bvcoend.ac.in/">Bharati Vidyapeeth College of Engineering</a>
          </span>{" "}
          pursuing my B.Tech in Information Technology. Aspiring data scientist skilled in Python for data manipulation and visualization. 
          Actively exploring Deep Learning and
          Natural Language Processing. Committed to advancing AI through continuous learning. I am also a huge{" "}
          <span className="text-blue-400">PC</span> fanboy. I love being
          inside the <span className="text-blue-400">System settings</span> for
          absolutely no reason xD, always looking for some of the most niche features.
          <br />
          <span className="text-blue-400">Weird Fact</span> - I have a
          nickname - <span className="text-blue-400">Mylo</span> (I just found it cute).
          Having a nickname is like having a second identity😀.<br />
          Coming to my interests, I love to build stuff. You can get my
          professional experience on my LinkedIn... <br />I am also a chess nerd and enjoy my free time just playing on{" "}
          <span className="text-blue-400"><a href="https://www.chess.com/member/normallifesuck" target="_blank">Chess.com</a></span> 🤘 <br />
        </div>
      );
    case "socials":
      return (
        <div>
          First of all, thanks for showing interest in me! <br />
          Here are my internet coordinates - <br />
          <span className="text-blue-300 ml-3">
            <a href="https://github.com/Abhinavks1405" target="_blank">Github</a>
          </span> - Here you can find all my projects and contributions. <br />
          <span className="text-blue-300 ml-3">
            <a href="https://www.linkedin.com/in/abhinavkumarsingh1405" target="_blank">LinkedIn</a>
          </span> - Here you can find my professional profile. (DMs preferred here) <br />
          <span className="text-blue-300 ml-3">
            <a href="mailto:abhinavkumarsingh1405@gmail.com">Mail</a>
          </span> - abhinavkumarsingh1405@gmail.com <br />
          I guess that's all :/, I am not very active on other platforms.
        </div>
      );
    case "skills":
      return (
        <div>
          <span className="text-blue-400 ml-3">Programming Languages:</span>
          <br />
          <span className="ml-7">Python, Java, Dart (Flutter), JavaScript, C, C++</span>
          <br />
          <span className="text-blue-400 ml-3">Machine Learning:</span>
          <br />
          <span className="ml-7">Scikit-learn, TensorFlow, NumPy, Pandas, Matplotlib, Seaborn, Flask, Jupyter Notebook</span>
          <br />
          <span className="text-blue-400 ml-3">Databases/Infrastructures:</span>
          <br />
          <span className="ml-7">Google Firebase, PostgreSQL, MySQL, MongoDB</span>
          <br />
          <span className="text-blue-400 ml-3">Version Control:</span>
          <br />
          <span className="ml-7">Git, GitHub</span>
          <br />
        </div>
      );
    case "projects":
      return (
        <div>
          <span className="text-blue-400 ml-3">1. </span>
          <a
            className="text-blue-300"
            href="https://github.com/shubhexists/proximity"
          >
            Proximity
          </a>
          - Clearly, I love terminals! This is a{" "}
          <span className="text-blue-400 ml-3">terminal-based group chat application</span>{" "}
          built using <span className="text-blue-400 ml-3">sockets</span> written in C!
          <br />
          <span className="text-blue-400 ml-3">2. </span>
          <a
            className="text-blue-300"
            href="https://github.com/shubhexists/2048"
          >
            2048
          </a>
          - This is an implementation of the popular game{" "}
          <span className="text-blue-400 ml-3">2048</span> in Flutter (Dart).
          <br />
          <span className="text-blue-400 ml-3">3. </span>
          <a
            className="text-blue-300"
            href="https://github.com/shubhexists/vault"
          >
            Vault
          </a>
          - An oversimplified version control system similar to{" "}
          <span className="text-blue-400 ml-3">Git</span> written in Rust
          (Incomplete but functional).
          <br />
          <span className="text-blue-400 ml-3">4. </span>
          <a
            className="text-blue-300"
            href="https://github.com/shubhexists/go-json-db"
          >
            Go-JSON-DB
          </a>
          - A simple <span className="text-blue-400 ml-3">JSON Database</span>{" "}
          written in Go (Functional).
          <br />
          <span className="text-blue-400 ml-3">5. </span>
          <a
            className="text-blue-300"
            href="https://github.com/shubhexists/react-maps"
          >
            React Maps
          </a>
          - A collection of light-weight React components for interactive maps
          by parsing SVG Images.
          <br />
          <span className="text-blue-400 ml-3">6. </span>
          <a
            className="text-blue-300"
            href="https://github.com/shubhexists/prism"
          >
            Prism
          </a>
          - Prism is a replica of ExpressJS written from scratch for learning
          purposes.{" "}
          <span className="text-blue-500">
            (Still has a lot of bugs though :( )
          </span>.
        </div>
      );
    case "clear":
      setCommand([]);
      return "";
    case "resume":
      window.open(
        "https://drive.google.com/file/d/1VB8Y3-CMmmSlE4SWNC9z2d3aoTiTgXg3/view?usp=sharing",
        "_blank"
      );
      return "Heading to resume...";
    case "experience":
      return (
        <div>
          <span className="text-blue-400 ml-3">1. </span>
          <span className="text-blue-300">INDOTABI TOURS</span> - I am working
          as a <span className="text-blue-400 ml-3">Sole Developer</span> to
          build and deploy the company’s website. It has a primary language{" "}
          <span className="text-blue-400 ml-3">Javascript</span>, but also uses{" "}
          <span className="text-blue-400 ml-3">ReactJS</span> for some
          components.
          <br />
          <span className="text-blue-400 ml-3">2. </span>
          <span className="text-blue-300">Coding Ninjas</span> - I was a{" "}
          <span className="text-blue-400 ml-3">Teaching Assistant</span> for
          DSA using JavaScript.
        </div>
      );
    case "goals":
      return (
        <div>
          <span className="text-blue-400 ml-3">Short Term Goals:</span>
          <br />
          <span className="ml-7">1. Complete my degree with good grades.</span>
          <br />
          <span className="ml-7">2. Secure an internship at a reputable tech company.</span>
          <br />
          <span className="text-blue-400 ml-3">Long Term Goals:</span>
          <br />
          <span className="ml-7">1. Become a proficient full-stack developer.</span>
          <br />
          <span className="ml-7">2. Contribute to open-source projects.</span>
          <br />
          <span className="ml-7">3. Continuously learn and adapt to new technologies in the field.</span>
        </div>
      );
    default:
      return <span className="text-blue-500">Error: command not found</span>;
  }
};
