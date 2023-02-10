import "./Sponsors.css";

function Sponsors(props) {
  return (
    <div className={`sponsors ${props.darkMode ? "dark-sponsors" : ""}`}>
      <div className="sponsors--container">
        <i className="far fa-heart"></i>
        <p className="sponsors--open-source">
          Vite is free and open source, made possible by wonderful sponsors.
        </p>
        <div className="sponsors-grid">
          <div className="sponsor--title div1">Platinum Sponsor</div>
          <div className="sponsor--plat div2">
            <img
              src="https://sponsors.vuejs.org/images/stackblitz.svg"
              alt=""
            />
          </div>
          <div className="sponsor--plat div3">
            <img
              className="sponsor--plat"
              src="https://sponsors.vuejs.org/images/storyblok.png"
              alt=""
            />
          </div>
          <div className="sponsor--title div4">Gold Sponsors</div>
          <div className="div5 sponsor--gold">
            <img
              src="https://sponsors.vuejs.org/images/tailwind_labs.svg"
              alt=""
            />{" "}
          </div>
          <div className="div6 sponsor--gold">
            <img src="https://sponsors.vuejs.org/images/repl_it.svg" alt="" />{" "}
          </div>
          <div className="div7 sponsor--gold">
            <img
              src="https://sponsors.vuejs.org/images/vue_jobs.png
"
              alt=""
            />{" "}
          </div>
          <div className="div8 sponsor--gold">
            <img
              src="https://sponsors.vuejs.org/images/divriots.png
"
              alt=""
            />{" "}
          </div>
          <div className="div9 sponsor--gold">
            <img
              src="https://sponsors.vuejs.org/images/cypress_io.svg
"
              alt=""
            />{" "}
          </div>
          <div className="div10 sponsor--gold">
            <div className="sponsor-mask"></div>{" "}
            <img
              src="https://sponsors.vuejs.org/images/prefect_io.svg
"
              alt=""
            />
          </div>
          <div className="div11 sponsor--gold">
            {" "}
            <img
              src="https://sponsors.vuejs.org/images/jetbrains.png
"
              alt=""
            />
          </div>
          <div className="div12 sponsor--gold">
            <div className="sponsor-mask"></div>
            <img
              src="https://sponsors.vuejs.org/images/pineview_labs.svg"
              alt=""
            />{" "}
          </div>
          <div className="div13 sponsor--gold"> </div>
          {/* <div className="div14 sponsor--gold"> </div> */}
          <div className="div99">
            <div class="invert">
              <img
                src="https://sponsors.vuejs.org/images/prefect_io.svg
"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <button className="btn-donate">Become a sponsor</button>
    </div>
  );
}

export default Sponsors;
