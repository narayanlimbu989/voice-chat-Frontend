import React from "react";
import Card from "../../components/shared/card";
import Button from "../../components/shared/Button";
import { useSelector, useDispatch } from "react-redux";
import { setAvatar } from "../../store/ActivationSlice";
import { useState } from "react";
import { activated } from "../../components/HTTPS/Https";
import { setAuth } from "../../store/AuthSclice";
import DefaultImage from "../../img/person-profile-image-icon.png";
import Loder from "../../components/shared/loder";

const StepAvatar = () => {
  const [loading, setloaging] = useState(false);
  const [error, seterror] = useState(false);
  const userName = useSelector((state) => state.ActivationSlice.name);
  const userPic = useSelector((state) => state.ActivationSlice.avatar);
  const [image, setimage] = useState(userPic ? userPic : DefaultImage);

  const dispatch = useDispatch();

  const chaptureimage = (e) => {
    const imgFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imgFile);
    reader.onloadend = function () {
      setimage(reader.result);
      dispatch(setAvatar(reader.result));
    };
  };

  const submit = async () => {
    if (!userName || !userPic) {
      seterror(true);
      return;
    }
    setloaging(true);
    try {
      const { data } = await activated({ userName, userPic });
      if (data.auth) {
        dispatch(setAuth(data));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloaging(false);
    }
  };
  if (loading) return <Loder message="Activation in progress" />;
  return (
    <div className="cardWrapper">
      <Card title={`Okey,${userName}`}>
        <div
          className="combine"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="avatarWraper">
            <img src={image} alt="" />
          </div>
          <label className="chooseimg" htmlFor="choose">
            Choose Profile Picture
          </label>
          <input
            type="file"
            onChange={chaptureimage}
            id="choose"
            style={{ display: "none" }}
          />
          {error && (
            <small style={{ color: "red", marginTop: "10px" }}>
              please select your profile picture.
            </small>
          )}
        </div>
        <Button text="Next" onClick={submit}></Button>
      </Card>
    </div>
  );
};

export default StepAvatar;
