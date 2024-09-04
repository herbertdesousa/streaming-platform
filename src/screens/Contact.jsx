import "./Contact.css";

import { Nav } from "../components/Nav";
import { Input } from "../components/Input";

import ContactDiscordPNG from "../assets/contact-discord.png";
import ContactInstagramPNG from "../assets/contact-instagram.png";
import ContactTwitterPNG from "../assets/contact-twitter.png";

export function Contact() {
  return (
    <div className="wrapper">
      <Nav />

      <main>
        <div className="left">
          <div>
            <h1>Dúvidas e suporte, entre em contato:</h1>
          </div>

          <div className="contact-sources">
            <img src={ContactDiscordPNG} />
            <img src={ContactInstagramPNG} />
            <img src={ContactTwitterPNG} />
          </div>
        </div>

        <span className="divider"></span>

        <div className="contact-right">
          <Input name="name" label="Nome" />
          <Input name="email" label="E-mail" />
          <Input name="message" label="Mensagem" isTextarea />

          <button type="button">Enviar</button>
        </div>
      </main>
    </div>
  );
}
