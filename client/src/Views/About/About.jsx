
import style from "../../Views/About/About.module.css";

export default function About() {
  return (
    <div className={style.containerAbout}>
      <div className={style.eachContainer}>
        <div className={style.containerAboutUs}>
          <div className={style.containerAboutUsInner}>
            <h2>¿About us?</h2>
            <h3>We are a web platform dedicated to NFTs (Non-Fungible Tokens) formed by an enthusiastic group of passionate about cryptocurrencies and web development. Our goal is to provide an exciting and creative space for cryptocurrency artists, collectors, and enthusiasts to interact and explore the exciting world of NFTs.</h3>
          </div>
        </div>

        <div className={style.containerMission}>
          <div className={style.containerMissionInner}>
            <h2>Mission</h2>
            <h3> Our mission is to provide an accessible, secure and easy-to-use platform that allows creators and collectors to explore new opportunities in the world of cryptocurrencies and digital art. We seek to foster a vibrant and collaborative community that drives innovation and creativity in the NFT space.</h3>
          </div>
        </div>

        <div className={style.containerVision}>
          <div className={style.containerVisionInner}>
            <h2>Vision</h2>
            <h3>Our vision at NifytiGo is to be a leader in the NFT industry, offering a go-to platform that inspires and connects artists, collectors and enthusiasts from around the world. Through our vision, we aspire to democratize access to NFTs technology in order to contribute to the sustainable growth of this exciting ecosystem.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
