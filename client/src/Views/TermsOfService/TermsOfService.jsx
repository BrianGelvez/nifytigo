import "./TermsOfService.modules.css";
import { useNavigate } from "react-router-dom";

export const TermsOfService = () => {
  const Navigate = useNavigate();

  const handleGoBack = () => {
    Navigate("/");
  };

  return (
    <div className="termofservice">
      <div className="card-service">
        <h1 className="ache1-1">Terms of service</h1>
        <br />
        <hr />
        <br />
        <h2 className="ache2-2">
          Welcome to our NFT (Non-Fungible Tokens) buying and selling platform.
          Before using our services, we ask you to read the following terms and
          conditions carefully, as they constitute a legally binding agreement
          between you (hereinafter, User) and [Platform Name] (hereinafter, the
          Platform)
        </h2>
      </div>
      <div className="cardconditions">
        <h1 className="ache1-1">Acceptance of the Terms and Conditions</h1>
        <br />
        <hr />
        <br />
        <div className="div">
          <div className="div1">
            <ul>
              <li>
                <h2 className="ache2-2">
                  By accessing or using the Platform in any way, the User agrees
                  to comply with these Terms and Conditions and all policies and
                  guidelines incorporated by reference in them. If the User does
                  not agree with these terms, they will not be able to use our
                  services.
                </h2>
              </li>
              <li>
                <h2 className="ache2-2">
                  Nature of the Platform: The Platform provides an online
                  marketplace for the buying and selling of NFTs. NFTs are
                  unique digital assets, whose authenticity and individuality
                  are guaranteed by blockchain technology.
                </h2>
              </li>
              <li>
                <h2 className="ache2-2">
                  User Responsibility: The User is responsible for all the
                  information provided and the actions carried out on the
                  Platform. You must ensure that personal information and
                  payment details are accurate and up to date. It is not allowed
                  to use the Platform for illegal purposes or for fraudulent
                  activities.
                </h2>
              </li>
              <li>
                <h2 className="ache2-2">
                  Intellectual Property: NFTs are digital assets created by
                  Users and/or third parties, who retain intellectual property
                  rights over them. The User guarantees that they have the
                  necessary rights to create and sell the NFTs that they offer
                  for sale on the Platform.
                </h2>
              </li>
            </ul>
          </div>

          <div className="div2">
            <ul>
              <li>
                <h2 className="ache2-2">
                  Transactions and Payments: The Platform facilitates
                  transactions between buyers and sellers of NFTs. The payment
                  of the NFTs will be made through [Payment Method accepted on
                  the Platform]. The Platform may charge a commission for each
                  successful transaction.
                </h2>
              </li>
              <li>
                <h2 className="ache2-2">
                  Communication between Users: The Platform may provide
                  functionalities for Users to communicate with each other. The
                  User undertakes to maintain a respectful tone and not to use
                  offensive or defamatory language.
                </h2>
              </li>
              <li>
                <h2 className="ache2-2">
                  Privacy and Data Protection: The Platform will collect and
                  process personal data in accordance with its Privacy Policy.
                  By using the Platform, the User consents to said processing
                  and guarantees that the data provided is true.
                </h2>
              </li>
              <li>
                <h2 className="ache2-2">
                  Modifications to the Terms and Conditions: The Platform
                  reserves the right to modify these Terms and Conditions at any
                  time. The changes will be effective when they are published on
                  the Platform, and the continued use of the same will imply the
                  acceptance of the new terms.
                </h2>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button className="buttonbackTermsOfService" onClick={handleGoBack}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
