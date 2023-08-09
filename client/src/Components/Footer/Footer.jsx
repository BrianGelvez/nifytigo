import React from "react";
import style from "../Footer/Footer.module.css";
import logo from "../../assets/NifytiGo2.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  function goToTopPage() {
    window.scrollTo(0, 0);
  }
  return (

      <div className={style.content}>
        <div className={style.boxLogo}>
          <img src={logo} alt="logo" className={style.img} />
          <h4 className={style.h4}>© 2023 NifytiGo</h4>
        </div>
        <div className={style.boxNames}>
          <div className={style.gridContainer}>
            <div className={style.column}>
              <h3 className={style.title}>Links of interest</h3>
              <NavLink to='/' className={style.navlink} onClick={goToTopPage}>Home</NavLink>
              <NavLink to='/Login' className={style.navlink} onClick={goToTopPage}>Log in</NavLink>
              {/*<NavLink to='/Contact' className={style.navlink} onClick={goToTopPage}>Contact us</NavLink>*/}


            </div>
            <div className={style.column}>
              <h3 className={style.title}>Our company</h3>
              <NavLink to='/About' className={style.navlink} onClick={goToTopPage}>About</NavLink>
              <NavLink to='/TermsOfService' className={style.navlink} onClick={goToTopPage}>Terms of use</NavLink>
              <NavLink to='/PrivacyOfPolicy' className={style.navlink} onClick={goToTopPage}>Privacy of policy</NavLink>
            </div>
            <div className={style.column}>
              <h3 className={style.title}>About us</h3>
              <NavLink to='/AboutProgrammers' className={style.navlink} onClick={goToTopPage}>Developers</NavLink>
              <NavLink to='/FrequentQuestions' className={style.navlink} onClick={goToTopPage}>FAQ</NavLink>
            </div>
          </div>
        </div>
        <div className={style.contenedorRedes}>
          <div className={style.follow}>
            <h4>Follow us on our social networks!</h4>
          </div>
          <div className={style.card}>
            <a href="https://twitter.com/" className={style.socialLink1} target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="8 0 33 48"
                width="60px"
                height="60px"
                baseProfile="basic">
                <path
                  d="M39,44H9c-1.657,0-3-1.343-3-3v-7h36v7C42,42.657,40.657,44,39,44z" /><path fill="#fff" d="M39,41H9c-1.105,0-2-0.895-2-2V7h34v32C41,40.105,40.105,41,39,41z" /><path d="M39,42H9c-1.654,0-3-1.346-3-3V7c0-0.552,0.447-1,1-1h34c0.553,0,1,0.448,1,1v32C42,40.654,40.654,42,39,42z M8,8v31	c0,0.551,0.448,1,1,1h30c0.552,0,1-0.449,1-1V8H8z" /><path d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563L28.587,32.304z" /><polygon points="15.866,34 23.069,25.656 22.127,24.407 13.823,34" /><polygon points="24.45,21.721 25.355,23.01 33.136,14 31.136,14" />
              </svg>
            </a>
            <a href="https://www.instagram.com" className={style.socialLink1} target="_blank" rel="noopener noreferrer">
              <svg
                viewBox="0 0 16 16"
                className="bi bi-instagram"
                fill="currentColor"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "white" }}
              >
                {" "}
                <path
                  fill="white"
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                ></path>{" "}
              </svg>
            </a>
            <a href="https://es-la.facebook.com" className={style.socialLink3} target="_blank" rel="noopener noreferrer">
              <svg
                viewBox="0 2 46 44"
                className="bi bi-facebook"
                fill="currentColor"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "white" }}
              >
                {" "}
                <path
                  fill="white"
                  d="M34.094,8.688h4.756V0.005h-8.643c-0.721-0.03-9.51-0.198-11.788,8.489c-0.033,0.091-0.761,2.157-0.761,6.983l-7.903,0.024
                v9.107l7.913-0.023v24.021h12.087v-24h8v-9.131h-8v-2.873C29.755,10.816,30.508,8.688,34.094,8.688z M35.755,17.474v5.131h-8v24
                h-8.087V22.579l-7.913,0.023v-5.107l7.934-0.023l-0.021-1.017c-0.104-5.112,0.625-7.262,0.658-7.365
                c1.966-7.482,9.473-7.106,9.795-7.086l6.729,0.002v4.683h-2.756c-4.673,0-6.338,3.054-6.338,5.912v4.873L35.755,17.474
                L35.755,17.474z"
                ></path>{" "}
              </svg>
            </a>
            <a href="https://wa.me" className={style.socialLink4} target="_blank" rel="noopener noreferrer">
              <svg
                viewBox="0 0 16 16"
                className="bi bi-whatsapp"
                fill="currentColor"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "white" }}
              >
                {" "}
                <path
                  fill="white"
                  d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                ></path>{" "}
              </svg>
            </a>
          </div>
        </div>
      </div>
   
  );
};

export default Footer;
