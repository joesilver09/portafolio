const Proyects = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:gap-16">
      <div>
        <a target="_blank" href="https://free-commerce.netlify.app/">
        <h3>E-commerce</h3>
        <img className="h-auto max-w-full rounded-lg" src="images/proyect1.png" alt="" />{" "}
        </a>
      </div>
      <div>
        <a target="_blank" href="https://usersform-crud.netlify.app">
        <h3>Users Form</h3>
        <img className="h-auto max-w-full rounded-lg" src="images/proyect2.png" alt="" />
        </a>
      </div>
      <div>
        <a target="_blank" href="https://galaxyquotes.netlify.app/">
        <h3>Quotes Randomized</h3>
        <img className="h-auto max-w-full rounded-lg" src="images/proyect3.png" alt="" />
        </a>
      </div>
      <div>
        <a target="_blank" href="https://pokedex-pokemonworld.netlify.app">
        <h3>Search in Pokedex</h3>
        <img className="h-auto max-w-full rounded-lg" src="images/proyect4.png" alt="" />
        </a>
      </div>
      <div>
        <a target="_blank" href="https://weatherapp-es.netlify.app/">
        <h3>Weather app</h3>
        <img className="h-auto max-w-full rounded-lg" src="images/proyect5.png" alt="" />
        </a>
      </div>
    </div>
  );
};
export default Proyects;
