import "./privacyOfPolicy.modules.css";
import { useNavigate } from "react-router-dom";


export const PrivacyOfPolicy = () => {

  const Navigate = useNavigate();

  const handleGoBack = () => {
      Navigate("/");
    };

  return (
    <div className="container-privacy-policy">
    <div className="privacy-policy">
      <div className="Card-policy">
        <h1 className="ache1">Privacy policy</h1>
        <br />
        <hr />
        <br />
        <h2 className="ache2">
          Effective Date: [Date of Effectiveness of the Privacy Policy] NifytiGo
          is committed to protecting and respecting your privacy. This Privacy
          Policy sets out the basis on which we process any personal data we
          collect from you or that you provide to us. Please read the following
          information carefully to understand our practices regarding your
          personal data and how we will treat it.
        </h2>
      </div>
      <div className="CardInfo">
        <h1 className="ache1">Information We Collect</h1>
        <br />
        <hr />
        <br />
        <ol>
          <li>
            <h2 className="ache2">
            Information Provided by You: We may collect information you provide
            when you register on our website, create a user account, fill out
            online forms, or communicate with us through any means. This
            information may include, among other data, your name, email address,
            physical address, phone number, and any other information you choose
            to provide.
            </h2>

          </li>
          <li>
            <h2 className="ache2">
            Automatically Collected Information: When you interact with our
            website, we may automatically collect certain information, such as
            your IP address, device type, web browser, pages visited, and other
            activities performed on our site.
            </h2>
          </li>
          <li>
            <h2 className="ache2">
            Cookies and Similar Technologies: We use cookies and similar
            technologies to enhance your experience on our website and to gather
            information about how you use it. You can modify your cookie
            preferences through your browser settings.
            </h2>
          </li>
        </ol>
        <button className="buttonbackPrivacy" onClick={handleGoBack}>Back</button>
      </div>
    </div>
    </div>
  );
};
export default PrivacyOfPolicy;