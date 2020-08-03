import React from "react";

import PageHeader from "../../components/PageHeader";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis:">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" name="subject" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" name="week-day" id="week-day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Horário</label>
            <input type="text" name="time" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
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
            Incrivelmente, Duda decidiu que pensar um pão com ovo parecia uma
            boa ideia.
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
      </main>
    </div>
  );
}

export default TeacherList;
