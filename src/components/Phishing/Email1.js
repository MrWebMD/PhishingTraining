import Email from "../Email/Email";

const Email1 = () => {
  const phishingEmailFrom = (
    <span className="wrapText">
      Microsoft Account Team&lt;micrοsftaccountteam@outlook.com&gt;
      <span className="tooltip tooltip--centerVertically">
        <span className="tooltiptext">
          The "o" character looks odd. It is actually a greek omicron used to mask the blocked microsoft keyword in outlook email addresses. See{" "}
          <a className="link link--underlined" href="https://www.malwarebytes.com/blog/news/2017/10/out-of-character-homograph-attacks-explained" target="_blank">
            Malware Bytes Homograph attacks
          </a>{" "}
        </span>
        <span className="pulse2"></span>
      </span>
    </span>
  );

  const phishingEmailTo = <span>Jessica Kimberly&lt;jessicak@gmail.com&gt;</span>;

  const phishingEmailContent = (
    <>
      <p>
        Hello{" "}
        <span className="tooltip tooltip--centerVertically">
          <span className="tooltiptext">The greeting is very impersonal. If you receive an email from Microsoft it should include some basic account details rather than something generic.</span>
          <span className="pulse2"></span>
        </span>
        Dear,
      </p>
      <p className="tooltip">
        We've had to temporarily disable your Microsoft due to suspicious activity. If no action is taken, your account may be disable permanently. <span className="tooltiptext">This section calls for urgency from the user which may make them press the verify button without analyzing the email</span>
        <span className="pulse2"></span>
      </p>
      <p className="tooltip">
        To reactive <span className="tooltiptext">Typos in emails can be an early indicator that the sender is not who they claim to be</span>
        <span className="pulse2"></span>your account, we're going to need to very some information.
      </p>
      <p>Please continue to verify your account.</p>
      <button className="btn btn--outline btn--fullWidthOnMobile filter-brightness-hover tooltip">
        Verify <p className="tooltiptext">http://microsoft.officeloginlive.com</p>
        <span className="pulse2"></span>
      </button>
    </>
  );
  return (
    <Email from={phishingEmailFrom} time="2:09 PM" to={phishingEmailTo} subject="Suspicious activity detected">
      {phishingEmailContent}
    </Email>
  );
};

export default Email1;
