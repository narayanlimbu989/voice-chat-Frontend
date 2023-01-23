import React from "react";
import Card from "../components/shared/card";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/shared/Button";

const Home = () => {
  const nav=useNavigate();
  return (
    <div className="cardWrapper">
      <Card title="Sign up">
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          commodi!
        </p>
        <Button text="Start" onClick={()=>nav("/authenticate")}></Button>
        <div className="signinwraper">
          Already have an account? <Link className="link" to="/authenticate">Sign in</Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
