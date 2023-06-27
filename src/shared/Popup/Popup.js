import React from "react";
import closeBtn from "../../images/popup-close.svg";
import "./Popup.css";

function Popup({ message, isError, onClose }) {
  return (
    <div className={`popup ${isError ? "popup--error" : "popup--success"}`}>
      <p className="popup__message">{message}</p>
      <button className="popup__close" onClick={onClose}>
        <img className="popup__close-btn" src={closeBtn} alt="Закрыть попап" />
      </button>
    </div>
  );
}

export default Popup;
