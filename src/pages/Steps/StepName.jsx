import React from "react";
import Card from "../../components/shared/card";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../store/ActivationSlice";

const StepName = ({ onNext }) => {
  const dispatch = useDispatch();
  const defname = useSelector((state) => state.ActivationSlice.name);
  const [name, setname] = useState(defname);
  const [error, seterror] = useState(false);

  const submit = () => {
    if (!name) {
      seterror(true);
      return;
    }
    dispatch(setName(name));
    onNext();
  };
  return (
    <div className="cardWrapper">
      <Card title="FullName">
        <p className="text">Please Enter your Name.</p>
        <Input
          placeholder="Enter FullName"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        {error && (
          <small style={{ color: "red", marginTop: "10px" }}>
            please Enter your Name.
          </small>
        )}
        <Button text="Next" onClick={submit}></Button>
      </Card>
    </div>
  );
};

export default StepName;
