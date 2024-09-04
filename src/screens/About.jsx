import "./About.css";

import { Nav } from "../components/Nav";

import AboutPhone1PNG from "../assets/about-phone-1.png";
import AboutPhone2PNG from "../assets/about-phone-2.png";

export function About() {
  return (
    <div className="wrapper">
      <Nav />

      <main>
        <div className="left">
          <div>
            <h1>Bem-vindo à revolução dos vídeos!</h1>

            <h2>
              Somos uma startup com o objetivo de facilitar a produção de
              conteúdo em larga escala com qualidade profissional, capaz de
              atingir uma audiência de milhões de seguidores.
            </h2>
          </div>

          <button type="button" className="btn">
            Baixe o app
          </button>
        </div>

        <img src={AboutPhone1PNG} />
        <img src={AboutPhone2PNG} />
      </main>
    </div>
  );
}
