import "./Sponsors.css";

function Sponsors() {
  return (
    <div className="sponsors">
      <div className="sponsors--container">
        <i class="far fa-heart"></i>
        <p className="sponsors--open-source">
          Vite is free and open source, made possible by wonderful sponsors.
        </p>
        <div class="sponsors-grid">
          <div class="sponsor--title div1">Platinum Sponsor</div>
          <div class="sponsor--plat div2">
            <img
              src="https://sponsors.vuejs.org/images/stackblitz.svg"
              alt=""
            />
          </div>
          <div class="sponsor--plat div3">
            <img
              class="sponsor--plat"
              src="https://sponsors.vuejs.org/images/storyblok.png"
              alt=""
            />
          </div>
          <div class="sponsor--title div4">Gold Sponsors</div>
          <div class="div5 sponsor--gold">
            <img
              src="https://sponsors.vuejs.org/images/tailwind_labs.svg"
              alt=""
            />{" "}
          </div>
          <div class="div6 sponsor--gold">
            <img src="https://sponsors.vuejs.org/images/repl_it.svg" alt="" />{" "}
          </div>
          <div class="div7 sponsor--gold">
            <img
              src="https://sponsors.vuejs.org/images/vue_jobs.png
"
              alt=""
            />{" "}
          </div>
          <div class="div8 sponsor--gold">
            <img
              src="https://sponsors.vuejs.org/images/divriots.png
"
              alt=""
            />{" "}
          </div>
          <div class="div9 sponsor--gold">
            <img
              src="https://sponsors.vuejs.org/images/cypress_io.svg
"
              alt=""
            />{" "}
          </div>
          <div class="div10 sponsor--gold">
            {" "}
            <img
              src="https://sponsors.vuejs.org/images/prefect_io.svg
"
              alt=""
            />
          </div>
          <div class="div11 sponsor--gold">
            {" "}
            <img
              src="https://sponsors.vuejs.org/images/jetbrains.png
"
              alt=""
            />
          </div>
          <div class="div12 sponsor--gold">
            <img
              src="https://sponsors.vuejs.org/images/pineview_labs.svg"
              alt=""
            />{" "}
          </div>
          <div class="div13"> </div>
          <div class="div14"> </div>
        </div>
      </div>
      <button className="btn btn-donate">Become a sponsor</button>
    </div>
  );
}

export default Sponsors;
