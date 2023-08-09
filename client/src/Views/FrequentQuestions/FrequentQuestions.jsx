import "./FrequentQuestions.modules.css";
import { useNavigate } from "react-router-dom";

export const FrequentQuestions = () => {

  const Navigate = useNavigate();

  const handleGoBack = () => {
      Navigate("/");
    };

  return (
    <div className="component">
      <div className="title1">
        <h1>Frequent questions</h1>
      </div>
      <div className="conteinerbubbles">
        <div className="bubbles1">
          <p className="ask">
            What if I encounter an issue with a transaction?
          </p>
          <div className="bubble">
            <p className="text">
              If you encounter any issues with a transaction, such as incorrect
              delivery of an NFT or a malfunction in the payment process, please
              contact us promptly through our customer support service at
              [customer support email]. Our team will assist you in resolving
              the issue in a timely manner.
            </p>
          </div>
          <p className="ask">Can I withdraw my NFTs from the platform?</p>
          <div className="bubble">
            <p className="text">
              Yes, you can withdraw your NFTs from the platform if you wish to
              do so. However, its essential to note that some NFTs may be
              subject to specific smart contracts or usage restrictions that you
              should consider before withdrawing them.
            </p>
          </div>
          <p className="ask">How can I purchase an NFT on NifytiGo?</p>
          <div className="bubble">
            <p className="text">
              To buy an NFT on NifytiGo, you need to first register on our
              website and create a user account. Then, you can explore the
              gallery of available NFTs and select the one you wish to purchase.
              Follow the instructions to complete the purchase using a
              compatible cryptocurrency.
            </p>
          </div>
        </div>
        <div className="bubble2">
          <p className="ask">Does NifytiGo charge fees for transactions?</p>
          <div className="bubble">
            <p className="text">
              Yes, NifytiGo charges a fee for each transaction made on the
              platform. These fees are used to cover operational costs and
              maintain the security and efficiency of the site.
            </p>
          </div>
          <p className="ask">What forms of payment does NifytiGo accept?</p>
          <div className="bubble">
            <p className="text">
              Currently, we accept payments in popular cryptocurrencies, such as
              Ethereum (ETH), and other tokens compatible with the blockchain
              network used by the NFT.
            </p>
          </div>
          <p className="ask">How is the authenticity of NFTs ensured?</p>
          <div className="bubble">
            <p className="text">
              NifytiGo strives to ensure the authenticity of NFTs sold on our
              platform. We work with trusted creators and sellers, and we use
              blockchain technology to trace the provenance and history of each
              NFT.
            </p>
          </div>
        </div>
      </div>
      <div>
          <button className="buttonbackTermsOfService" onClick={handleGoBack}>
            Back
          </button>
        </div>
    </div>
  );
};
