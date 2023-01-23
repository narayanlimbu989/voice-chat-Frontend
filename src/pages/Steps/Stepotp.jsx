import React, { useState } from "react";
import Button from "../../components/shared/Button.jsx";
import Card from "../../components/shared/card.jsx";
import Input from "../../components/shared/Input.jsx";
import { verifyOtp } from "../../components/HTTPS/Https.js";
import { setAuth } from "../../store/AuthSclice.js";
import { useSelector, useDispatch } from "react-redux";

const Stepotp = () => {
  const { phone, hash } = useSelector((state) => state.AuthSclice.otp);
  const [otp, setotp] = useState("");
  const [error, seterror] = useState(false);
  const dispatch = useDispatch();
  const submit = async () => {
    if (!otp || otp.length !== 4) {
      seterror(true);
      return;
    }
    try {
      const { data } = await verifyOtp({ otp, phone, hash });
      dispatch(setAuth(data));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="cardWrapper">
      <Card title="OTP Verify">
        <Input
          place="OTP-Number"
          value={otp}
          onChange={(e) => setotp(e.target.value)}
        />
        {error && (
          <small style={{ color: "red", marginTop: "10px" }}>
            please provide correct OPT Number.
          </small>
        )}

        <Button text="Next" onClick={submit} />
      </Card>
    </div>
  );
};

export default Stepotp;
