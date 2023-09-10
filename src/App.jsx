import { useEffect, useState } from "react";
import "./App.css";
import Borders from "./components/Borders";
import Proyects from "./components/Proyects";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleOnClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <main className="font-phudu text-pro dark:text-pro-white ">
      <div className=" fixed  aspect-square -z-10 bg-gray-300 dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 dark:to-slate-900  bg-cover h-screen w-screen"></div>
      <header className="grid dark:shadow-lg dark:shadow-gray-950 grid-cols-2 fixed z-10 bg-gray-300 dark:bg-gray-950 w-full p-3 pt-3">
        <div className="z-10 w-10">
          <img src="ico.png" alt="logo" />
        </div>

        <nav className="flex justify-end items-center">
          {/* <button
            onClick={handleOnClick}
            className="z-10 relative grid aspect-square w-8"
          >
            <i className='bx bxs-moon
             text-3xl'></i>
          </button> */}

          <div className=" font-bold text-sm sm:text-base w-[200px] sm:w-[250px] z-10 absolute text-center right-1/2 translate-x-1/2">
            <ul className="gap-x-2 grid grid-cols-6">
              <li className="col-span-2">
                <a href="#">home</a>
              </li>
              <li className="col-span-2">
                <a href="#about">about me</a>
              </li>
              <li className="col-span-2">
                <a href="#skills">skills</a>
              </li>
              <li className="col-span-2 col-start-2">
                <a href="#proyects">proyects</a>
              </li>
              <li className="col-span-2">
                <a href="#contact">contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="px-8 grid grid-cols-1 place-content-center place-items-center max-w-[390px] sm:max-w-[620px] mx-auto">
        <section
          id="home"
          className=" py-[17vh] sm:py-[22vh] h-[100vh] w-full grid place-items-center"
        >
          <div className="gap-4 grid sm:grid-cols-3 ">
            <div className=" w-full grid place-items-center sm:col-start-3">
              <img src="images/logogradient.png" alt="logo" />
            </div>
            <div className="sm:col-start-1 sm:row-start-1 sm:col-span-2 relative w-full text-right mx-auto font-medium text-base">
              <Borders />
              <div className="p-5">
                <h1 className="text-left text-5xl sm:text-6xl"> Welcome. </h1>
                <br />
                <h2 className="sm:text-2xl">
                  I am
                  <span className="text-pro-oscure-blue dark:text-pro-green text-2xl sm:text-4xl font-phudu">
                    {" "}
                    Juan Betancourt
                  </span>{" "}
                  <br />
                  but feel free to call me
                  <span className="text-pro-oscure-blue dark:text-pro-green text-[1.75rem] sm:text-[2.7rem] font-phudu">
                    {" "}
                    Joe
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div className="sm:translate-x-48 sm:-translate-y-16">
            <p className="text-emerald-700 dark:text-sky-300 pt-4 font-medium text-xs sm:text-lg">
              Front-end developer
            </p>
          </div>

          <div className="grid gap-3 text-start  sm:-translate-y-16 border relative p-4 mt-20  font-bold rounded-xl max-w-[400px]">
            <div className="absolute -top-3  text-xl right-1/2 translate-x-1/2">
              <i className="bg-gray-900 px-2 bx bxs-quote-right"></i>
            </div>
            <h4 className=" text-sm sm:text-xl">
              Every problem has a solution. You just have to be creative enough
              to find it.
            </h4>
            <span className="text-end text-xs sm:text-lg font-normal">
              Travis Kalanick, co-founder of Uber
            </span>
          </div>
        </section>

        <section id="about" className="py-20 grid gap-10">
          <h3 className="font-black subtitle dark:subtitle_dark text-3xl text-center">
            ABOUT ME
          </h3>

          <div className="w-full max-w-[450px] pt-10 relative grid place-items-center rounded-3xl">
            <div className="relative bg-slate-400 dark:bg-gray-700 -m-4 grid  grid-cols-3 rounded-2xl">
              <div className=" m-2  col-span-2 rounded-2xl">
                <p className="font-normal text-sm sm:text-lg p-3">
                  Experienced front-end developer adept at translating designs
                  into intuitive, responsive websites. Committed to delivering
                  pixel-perfect, user-friendly interfaces. Passionate about
                  creating seamless online experiences.
                </p>
              </div>
              <div className=" absolute  w-40 sm:w-48 bottom-0 right-0">
                <img src="images/photo.png" alt="picture" />
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="grid gap-10 w-full py-20 place-items-center">
          <h2 className="font-black subtitle text-3xl text-center">SKILLS</h2>

          <div className="relative w-full p-2 sm:p-4 max-w-[450px]">
            <Borders />
            <ul className=" p-4 text-6xl  sm:text-8xl text-center grid grid-cols-3 gap-4">
              <li>
                <i className="devicon-javascript-plain colored"></i>
              </li>
              <li>
                <i className="devicon-html5-plain colored"></i>
              </li>
              <li>
                <i className="devicon-css3-plain colored"></i>
              </li>
              <li>
                <i className="devicon-react-original colored"></i>
              </li>
              <li>
                <i className="devicon-tailwindcss-plain colored"></i>
              </li>
              <li>
                <i className="devicon-redux-original colored"></i>
              </li>
            </ul>
          </div>
        </section>

        <section id="proyects" className=" text-center py-20 grid gap-10">
          <h2 className="font-black subtitle text-3xl">PROYECTS</h2>

          <Proyects />
        </section>

        {/* <section
          className="font-black subtitle text-3xl text-center py-20 grid gap-10"
          id="contact"
        >
          <h2>CONTACT</h2>
        </section> */}
      </div>
      <hr />
      <footer id="contact" className="grid justify-center p-4">
        <nav>
          <ul className="grid text-5xl grid-cols-3 place-items-center">
            <li>
              <a
                href="https://www.linkedin.com/in/joesilver09/"
                target="_blank"
              >
                <i className="devicon-linkedin-plain"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/joesilver09">
                <i className="devicon-github-original"></i>
              </a>
            </li>
            {/* <li>
              <a  target="_blank" href="mailto:joebetan09@gmail.com">
              <i className='bx bxs-envelope'></i>
              </a>
            </li> */}
            <li>
              <a
                target="_blank"
                href=" https://api.whatsapp.com/send?phone=50661263987&text=Vi%20tu%20portafolio%20y%20quisiera%20ponerme%20en%20contacto "
              >
                <i className=" text-6xl bx bxl-whatsapp-square"></i>
              </a>
            </li>
          </ul>
        </nav>

        <span className="text-xs font-sans absolute right-1 translate-y-14">
          {" "}
          &copy; Joe Betancourt 2023
        </span>
      </footer>
    </main>
  );
}

export default App;
