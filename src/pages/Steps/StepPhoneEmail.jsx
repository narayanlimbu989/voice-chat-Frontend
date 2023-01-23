import React, { useState } from "react";
import Phone from "../../components/phoneEmail/Phone";
import Email from "../../components/phoneEmail/Email";

const phoneEmail = {
  phone: Phone,
  email: Email,
};
const StepPhoneEmail = ({ onNext }) => {
  const [type, settype] = useState("phone");
  const Currentcomp = phoneEmail[type];
  return (
    <div className="phoneEmailwraper">
      <div className="innerwrapper">
        <div className="button_wrap">
          <button
            className={` ${type === "phone" ? "button_active" : "button"}`}
            onClick={() => settype("phone")}
          >
            ☎️
          </button>
          <button
            className={`${type === "email" ? "button_active" : "button"}`}
            onClick={() => settype("email")}
          >
            📧
          </button>
        </div>
        <Currentcomp onNext={onNext} />
      </div>
    </div>
  );
};

export default StepPhoneEmail;
