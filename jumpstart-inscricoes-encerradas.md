---
title: Jumpstart - Inscrições encerradas
description: Jumpstart - As inscrições estão encerradas encerradas, quer entrar na fila de espera?
layout: blank
class: page-jumpstart-fila
redirect_from:
  - /jumpstart
  - /rocketweek
  - /rocketweek-inscricao
---

<section id="primary">
  <div class="container">
    <header>
      <a href="{{ site.baseurl }}/" class="logo" title="Conhecer a RocketSeat">
        <img src="{{ 'rocket.svg' | asset_path }}" alt=""/>
        <img src="{{ 'rocketseat-white.svg' | asset_path }}" title="{{ site.name }} | {{ site.title }}" alt="{{ site.name }} | {{ site.title }}"/>
      </a>
      <a href="/" class="logo-jumpstart">
        <img src="{{ 'jumpstart/logo.svg' | asset_path }}" alt="curso Jumpstart">
      </a>
    </header>
    <footer>
      <h2>As inscrições estão encerradas!</h2>
      <span>Cadastre-se abaixo para entrar na lista de espera e você será avisado quando abrir a próxima turma</span>
      <button type="button" class="call-action open-modal">Entrar na fila de espera</button>
    </footer>
  </div>
</section>

<section id="statements">
  <div class="container">
    <h2>Veja o que estão falando da Rocket<b>Seat</b></h2>

    <div>
      <blockquote>
        <p>Todo conteúdo que recebo tem me ensinado bastante sobre como deve funcionar uma startup e seus pilares, e tem me ajudado a não perder o foco em meus projetos.</p>
        <span>Adonai de Araújo</span>
      </blockquote>

      <blockquote>
        <p>Esses três caras estão conseguindo mais do que apenas criar guias para chegar lá, eles estão criando uma cultura. Essa cultura de que todos podem empreender e de que não existe atalho pra isso.</p>
        <span>Douglas Haubert</span>
      </blockquote>

      <blockquote>
        <p>Estou acompanhando há pouco tempo, mas tenho gostado bastante. Sou muito grato por compartilharem o conhecimento de vocês e buscarem ajudar as pessoas a tirar suas idéias do papel.</p>
        <span>Lucas Fernandes</span>
      </blockquote>

      <blockquote>
        <p>Eu vejo muitas pessoas com dificuldade de começar a criar o seu negócio, mas que bom que a RocketSeat está aí nessa empreitada. Quem sabe um dia não faça parte do time.</p>
        <span>Fábio Badaró</span>
      </blockquote>
    </div>
  </div>
</section>

<section id="modulos">
  <div class="container">
    <h2>Módulos do Jumpstart</h2>

    <div id="timeline">
      <div class="track">
        <span></span>
        <div>
          <h3>Módulo 01: Ideação</h3>
          <p>Nesse momento seu negócio está apenas no campo dos achismos. Mesmo que você já tenha uma aplicação no ar, suas hipóteses ainda não foram confirmadas. Aqui você irá levantar o maior número de informações possível a respeito do seu negócio, preenchendo a primeira versão do seu canvas.
          </p>
        </div>
      </div>
      <div class="track">
        <div>
          <h3>Módulo 02: Descobrimento</h3>
          <p>Aqui é o momento de ir pra rua, se colocar no lugar do cliente, fazer entrevistas e entender qual é exatamente o problema que você está resolvendo. A ideia é validar todas as hipóteses levantadas durante o processo de ideação, e ter clareza sobre qual é o trabalho que precisa ser feito.</p>
        </div>
        <span></span>
      </div>
      <div class="track">
        <span></span>
        <div>
          <h3>Módulo 03: Solução</h3>
          <p>Nesse momento você irá definir qual é a melhor maneira de resolver o problema que validou, preparando e testando a oferta com base na sua proposta de valor. Itens como a persona, a jornada do consumidor e até o modelo de receita já devem estar claros a essa altura.
          </p>
        </div>
      </div>
      <div class="track">
        <div>
          <h3>Módulo 04: Desenvolvimento</h3>
          <p>Somente a partir daqui é que você irá começar a trabalhar no seu MVP. Nesse ponto sua ideia já sofreu inúmeras alterações, e a maioria das suas hipóteses já devem ter sido confirmadas. Então esse é o momento de focar no que realmente entrega valor para o seu cliente.</p>
        </div>
        <span></span>
      </div>
      <div class="track">
        <span></span>
        <div>
          <h3>Módulo 05: Validação</h3>
          <p>Aqui a missão é confirmar que sua solução realmente cura a dor do cliente, a ponto dele estar disposto a pagar por ela. E uma vez que as pessoas comprem e recomprem seu produto, você estará pronto para ir para o próximo nível.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{% include pilots.html %}

{% include faq.html %}

<section id="final">
  <div class="container">
    <h2>Pronto para tirar sua ideia do papel e fundar sua startup?</h2>
    <button class="call-action open-modal" type="button">Entrar na fila de espera</button>
  </div>
</section>

<div id="modal">
  <div id="modal-content">
    <h2>Deixe seu e-mail e te avisamos quando a próxima turma abrir</h2>

    <form action="http://hike.rocketseat.com.br/api/subscriptions" method="POST">
      <input placeholder="Deixe seu melhor e-mail" name="data[email]" type="email" required>
      <input type="hidden" name="data[list_id]" value="90874765-d19d-427f-82d2-164e73811891">
      <input type="hidden" name="data[redirect_url]" value="http://rocketseat.com.br/jumpstart-fila-obrigado">
      <button class="call-action" type="submit">Entrar na fila de espera</button>
    </form>

    <button type="button" id="close-modal">x</button>
  </div>
</div>

<div id="footer-container">
  {% include footer.html %}
</div>
