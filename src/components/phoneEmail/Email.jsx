import React, { useState } from "react";
import Button from "../shared/Button.jsx";
import Card from "../shared/card.jsx";
import { useNavigate } from "react-router-dom";
import Input from "../shared/Input.jsx";

const Email = ({onNext}) => {
  const [email,setemail]=useState()
  const nav = useNavigate();
  return (
    <Card title="Email">
      <p className="text">Please Enter Correct Email Address.</p>
      <Input place="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
      <Button text="Next" onClick={onNext}></Button>
    </Card>
  );
};

export default Email;
