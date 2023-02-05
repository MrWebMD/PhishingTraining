import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faRotateRight, faInfoCircle, faShare } from "@fortawesome/free-solid-svg-icons";
import { Store } from "react-notifications-component";

import copy from "copy-to-clipboard";

const AddressBar = ({ url, tag }) => {
  const copyHandler = () => {
    copy(url);

    Store.addNotification({
      title: "PhishED",
      message: "Link copied to clipboard",
      type: "info",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
  };

  return (
    <div className="addressBar">
      <div className="addressBar__innerWrapper pageBoundary">
        <div className="addressBar__buttons">
          <FontAwesomeIcon icon={faChevronLeft} />
          <FontAwesomeIcon icon={faChevronRight} />
          <FontAwesomeIcon icon={faRotateRight} />
        </div>
        <div className="addressBar__searchBox tooltip">
          <span className="tooltiptext">{url}</span>
          <div className="addressBar__searchBoxIcon filter-brightness-hover">
            <FontAwesomeIcon icon={faShare} onClick={copyHandler} />
          </div>
          <div className="addressBar__urlWrapper">
            <h6 className="addressBar__typedValue" onClick={copyHandler} id={tag}>
              {url}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressBar;
