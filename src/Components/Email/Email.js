import { faChevronDown, faInbox, faLock, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Email = ({ from, time, to, toName, subject, children }) => {
  return (
    <div className="email">
      <div className="email__innerWrapper">
        <h1 className="email__subjectHeading">Account Activation</h1>
        <div className="email__metaData">
          <div className="email__metaRow email__wrapText">
            <div>
              <FontAwesomeIcon icon={faStar} className="email__icon" />
              <FontAwesomeIcon icon={faInbox} className="email__icon" />
            </div>
            <p>{time}</p>
          </div>
          <div className="email__metaRow">
            <p className="email__from email__fieldTitle">
              <strong>From: </strong>
              <FontAwesomeIcon icon={faLock} className="email__icon" />
              <span className="email__fromEmail email__wrapText">{from}</span>
            </p>
          </div>
          <div className="email__metaRow">
            <p className="email__toName email__fieldTitle">
              <strong>To:</strong>&nbsp;
              <span className="email__toEmail email__wrapText">{to}</span>
            </p>
            <div></div>

            <p>
              <FontAwesomeIcon icon={faChevronDown} className="email__icon" />
            </p>
          </div>
        </div>
        <div className="email__content">{children}</div>
      </div>
    </div>
  );
};

export default Email;
