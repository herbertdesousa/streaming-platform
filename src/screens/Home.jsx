import "./Home.css";

import { Nav } from "../components/Nav";

import HomeHeroPNG from "../assets/home-hero.png";

export function Home() {
  return (
    <div className="wrapper">
      <Nav />

      <main>
        <div className="left">
          <div>
            <h1>Crie seus vídeos online</h1>

            <h2>
              Transforme suas ideias em filmes memoráveis: onde a criatividade
              encontra a simplicidade.
            </h2>
          </div>

          <button type="button" className="btn">
            Começar agora!
          </button>
        </div>

        <img src={HomeHeroPNG} />
      </main>
    </div>
  );
}
