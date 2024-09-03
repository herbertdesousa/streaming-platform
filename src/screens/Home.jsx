import "./Home.css";

import { Nav } from "../components/Nav";
import { HomeCard } from "../components/HomeCard";

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

      <section>
        <HomeCard
          num="01"
          title="Youtube"
          bgColor="red"
          description="Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo."
        />
        <HomeCard
          num="02"
          title="Tiktok"
          bgColor="yellow"
          description="Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok."
        />
        <HomeCard
          num="03"
          title="Facebook"
          bgColor="green"
          description="Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook."
        />
        <HomeCard
          num="04"
          title="Instagram"
          bgColor="blue"
          description="Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels."
        />
      </section>
    </div>
  );
}
