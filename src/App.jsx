import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => setIsOpen((prev) => !prev);

  return (
    <main className="font-merriweather text-blue-light bg-black-bg bg-cover min-h-screen min-w-screen">
      <header className=" grid grid-cols-2 w-full">
        <div className="p-5">
          <img src="icon.png" alt="logo" className=" w-10" />
        </div>

        <nav className="flex justify-end items-center m-2">
          <button
            onClick={handleOnClick}
            className="relative grid aspect-square w-10"
          >
            <i className="bx bx-menu text-3xl"></i>
          </button>

          {isOpen && (
            <div className="p-2 absolute right-0 text-end m-2 top-14 border">
              <ul className="gap-y-2">
                <li>
                  <a href="#home">home</a>
                </li>
                <li>
                  <a href="#about">about me</a>
                </li>
                <li>
                  <a href="#skills">skills</a>
                </li>
                <li>
                  <a href="#proyects">proyects</a>
                </li>
                <li>
                  <a href="#contact">contact</a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>

      <div className=" grid grid-cols-1 Place-content-center gap-16 place-items-center mx-auto">
        <section
          id="home"
          className="uppercase gap-6 p-3 grid grid-cols-1 place-items-center"
        >
          <h1 className="text-white-bg font-black text-5xl">Welcome!</h1>
          <h2 className="relative text-center mx-auto text-3xl">
            I am{" "}
            <span className="text-green-light text-5xl font-phudu">
              Juan Betancourt
            </span>{" "}
            but you can call me{" "}
            <span className=" text-green-light text-5xl font-phudu">Joe</span>
          </h2>
          <div className="p-4 m-2 border-4 rounded-3xl">
            <img src="images/logowhite.png" alt="logo" />
          </div>
        </section>

        <section id="about">
          <h3 className=" col-span-2 font-black text-green-light text-3xl text-center text-">ABOUT ME</h3>

          <div className="bg-[#3a3636] grid place-items-center m-3 rounded-3xl">
            <div className=" p-4">
              <img src="images/picture.png" alt="picture" />
            </div>
            <div className=" m-2 bg-black-bg rounded-2xl">
              <p className="text-2xl p-3">I'm an skilled frondend developer with an blah bla</p>
            </div>
          </div>
        </section>

        <section id="skills">
          <h2>SKILLS</h2>
        </section>

        <section id="proyects">
          <h2>PROYECTS</h2>
        </section>
        <hr />
        <section id="contact">
          <h2>CONTACT</h2>
        </section>
      </div>
      <hr />
      <footer>
        <nav>
          <ul>
            <li>linkedin</li>
            <li>github</li>
            <li>email</li>
            <li>whatsapp</li>
          </ul>
        </nav>

        <span>Joe Betancourt 2023</span>
      </footer>
    </main>
  );
}

export default App;
