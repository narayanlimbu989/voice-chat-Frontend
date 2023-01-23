import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineAudio, AiOutlineAudioMuted } from "react-icons/ai";
import { useWebRTC } from "../Hooks/useWebRTC";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getRoomsTitle } from "./HTTPS/Https";

const Room = () => {
  const [room, setroom] = useState(null);
  const user = useSelector((state) => state.AuthSclice.user);
  const { id: roomId } = useParams();
  const { clients, provideRef, handlemute } = useWebRTC(roomId, user);
  const [ismute, setmute] = useState(true);
  const link = useNavigate();
  const GoBack = () => {
    link("/rooms");
  };

  useEffect(() => {
    handlemute(ismute, user.id);
  }, [ismute]);

  useEffect(() => {
    const fatchroom = async () => {
      const { data } = await getRoomsTitle(roomId);
      setroom(data);
    };
    fatchroom();
  }, [roomId]);

  const handlemutebtn = (clientid) => {
    if (clientid !== user.id) return;
    setmute((ismute) => !ismute);
  };

  return (
    <div>
      <div className="container">
        <button onClick={GoBack} className="goback">
          <BsArrowLeft /> <span>All voice Room</span>
        </button>
      </div>
      <div className="clientsWrap">
        <div className="top_clientsWrap">
          <h2>{room?.topic}</h2>
          <div>
            <span>✋</span>
            <span onClick={GoBack}>Leave</span>
          </div>
        </div>
        <div className="bottom_clientsWrap">
          {clients.map((client) => {
            return (
              <div className="client" key={client.id}>
                <div className="userhead">
                  <audio
                    ref={(instance) => provideRef(instance, client.id)}
                    autoPlay
                  ></audio>
                  <img className="userAvatar" src={client.avatar} alt="" />
                  <button
                    onClick={() => handlemutebtn(client.id)}
                    className="micBtn"
                  >
                    {client.muted ? (
                      <AiOutlineAudioMuted />
                    ) : (
                      <AiOutlineAudio />
                    )}
                  </button>
                </div>
                <h4>{client.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Room;
