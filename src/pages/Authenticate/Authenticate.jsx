import React, { useState } from "react";
import StepPhoneEmail from "../Steps/StepPhoneEmail";
import Stepotp from "../Steps/Stepotp";

const stepsToregistar = {
  1: StepPhoneEmail,
  2: Stepotp,
};
const Authenticate = () => {
  const [step, setstep] = useState(1);
  const Currentstep = stepsToregistar[step];
  return (
    <div>
      <Currentstep onNext={() => setstep(step + 1)} />
    </div>
  );
};

export default Authenticate;
