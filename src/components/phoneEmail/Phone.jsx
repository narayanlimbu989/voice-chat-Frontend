import React, { useState } from "react";
import Button from "../shared/Button.jsx";
import Card from "../shared/card.jsx";
import Input from "../shared/Input.jsx";
import { sendOtp } from "../HTTPS/Https.js";
import { useDispatch } from "react-redux";
import { setOtp } from "../../store/AuthSclice.js";

const Phone = ({ onNext }) => {
  const [phonenumber, setphonenumber] = useState("");
  const [error, seterror] = useState(false);

  const dispatch = useDispatch();


  const submit = async () => {
    if (phonenumber.length !== 10) {
      seterror(true);
      return;
    }else if(phonenumber.length === 10){
      seterror(false);
    }
    const { data } = await sendOtp({ phone: phonenumber });
    console.log(data);
    dispatch(setOtp({ phone: data.phone, hash: data.hash }));
    onNext();
  };


  return (
    <Card title="phone">
      <p className="text">Please Enter Correct phone Number.</p>
      <Input
        placeholder="phone Number"
        value={phonenumber}
        onChange={(e) => setphonenumber(e.target.value)}
      />
      {error && (
        <small style={{ color: "red", marginTop: "10px" }}>
          phonenumber must be 10 Digit.
        </small>
      )}
      <Button text="Next" onClick={submit}></Button>
    </Card>
  );
};

export default Phone;
