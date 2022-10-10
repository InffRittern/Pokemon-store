export function Jumbotron() {
  return (
    <>

        <div className="landing-wrapper container p-5">
          <h1 className="display-4">Добро пожаловать в мой магазин игр Pokemon</h1>
          <hr />
          <p>В магазин</p>
          <a href="/store" className="btn btn-primary">
            Купи сейчас!
          </a>
          <hr />
          <div className="pokemonbg"></div>
          <h3>
            Этот магазин крутой!
          </h3>
        </div>

    </>
  );
}
