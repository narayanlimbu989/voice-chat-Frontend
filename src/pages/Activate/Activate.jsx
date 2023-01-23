import React from "react";
import { useState } from "react";
import StepName from "../Steps/StepName";
import StepAvatar from "../Steps/StepAvatar";

const steps = {
  1: StepName,
  2: StepAvatar,
};
const Activate = () => {
  const [step, setstep] = useState(1);
  const Step = steps[step];
  return (
    <div>
      <Step onNext={() => setstep(step + 1)}></Step>
    </div>
  );
};

export default Activate;
