import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://pbs.twimg.com/profile_images/1274714904965062657/MluSy3uC_400x400.jpg"
          alt="avatar"
        />
        <div>
          <strong>Pão com ovo prensado</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Eu seria um pão com ovo comum.
        <br />
        Incrivelmente, Duda decidiu que pensar um pão com ovo parecia uma boa
        ideia.
        <br />
        Então cá estou eu, queimado por fora, cru por dentro, totalmente
        intragável.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>Grátis</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
